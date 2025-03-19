const express = require('express');
const router = express.Router();
const pool = require('../config/pool');
const multer = require('multer');
const path = require('path');

// >>>>>>>>>>>>>>>>>>>>>>>> FILE UPLOAD SETUP <<<<<<<<<<<<<<<<<<<<<<<<<<< //
// Multer configuration for handling company logo uploads
const storage = multer.diskStorage({
    destination: './uploads/', // Save files to the "uploads" folder
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
    },
});

const upload = multer({ storage });

// >>>>>>>>>>>>>>>>>>>> GET /api/jobs - Fetch all jobs <<<<<<<<<<<<<<<<<<<< //
router.get('/', (req, res) => {
    pool.query('SELECT * FROM jobs ORDER BY created_at DESC') // Fetch jobs ordered by newest
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error('Error fetching jobs:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// >>>>>>>>>>>>>>>>>>>> GET /api/jobs/:id - Fetch job by ID <<<<<<<<<<<<<<<<<<<< //
router.get('/:id', (req, res) => {
    const jobId = req.params.id; // Extract job ID from request

    pool.query('SELECT * FROM jobs WHERE id = $1', [jobId])
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json(result.rows[0]); // Return job details
        })
        .catch((error) => {
            console.error('Error fetching job:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// >>>>>>>>>>>>>>>>>>>>>> POST /api/jobs - Create a new job <<<<<<<<<<<<<<<<<<<<<<< //
router.post('/', upload.single('companyLogo'), (req, res) => {
    const {
        title,
        description,
        requirements,
        location,
        company,
        recruiter_id,
        is_open,
        salary, // New optional salary field
    } = req.body;

    const companyLogo = req.file ? `/uploads/${req.file.filename}` : null; // Store uploaded logo path

    // Validate required fields
    if (
        !title ||
        !description ||
        !requirements ||
        !location ||
        !company ||
        !recruiter_id
    ) {
        return res
            .status(400)
            .json({ error: 'All required fields must be filled.' });
    }

    pool.query(
        `INSERT INTO jobs 
         (title, description, requirements, location, company, recruiter_id, is_open, company_logo, salary) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [
            title,
            description,
            requirements,
            location,
            company,
            recruiter_id,
            is_open !== undefined ? is_open : true, // Ensure boolean handling
            companyLogo,
            salary || null, // Allow salary to be optional
        ]
    )
        .then((result) => res.status(201).json(result.rows[0])) // Send back created job
        .catch((error) => {
            console.error('Error adding job:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// >>>>>>>>>>>>>>>>>>>> DELETE /api/jobs/:id - Remove a job listing <<<<<<<<<<<<<<<<<<<< //
router.delete('/:id', (req, res) => {
    const jobId = req.params.id; // Extract job ID from request

    pool.query('DELETE FROM jobs WHERE id = $1 RETURNING *', [jobId])
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json({
                message: 'Job deleted successfully',
                deletedJob: result.rows[0],
            });
        })
        .catch((error) => {
            console.error('Error deleting job:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// >>>>>>>>>>>>>>>>>>>> PUT /api/jobs/:id - Update a job listing <<<<<<<<<<<<<<<<<<<< //
router.put('/:id', (req, res) => {
    const jobId = req.params.id; // Get job ID from request
    const { title, description, requirements, location, is_open, salary } =
        req.body; // Get updated fields

    // Check if at least one field is provided
    if (
        !title &&
        !description &&
        !requirements &&
        !location &&
        is_open === undefined &&
        !salary
    ) {
        return res
            .status(400)
            .json({ error: 'At least one field is required to update' });
    }

    // Update job in database
    pool.query(
        `UPDATE jobs 
         SET title = COALESCE($1, title), 
             description = COALESCE($2, description), 
             requirements = COALESCE($3, requirements), 
             location = COALESCE($4, location), 
             is_open = COALESCE($5, is_open), 
             salary = COALESCE($6, salary)
         WHERE id = $7 
         RETURNING *`,
        [title, description, requirements, location, is_open, salary, jobId]
    )
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json({
                message: 'Job updated successfully',
                updatedJob: result.rows[0],
            });
        })
        .catch((error) => {
            console.error('Error updating job:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;
