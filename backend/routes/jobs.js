const express = require('express');
const router = express.Router();
const pool = require('../config/pool');
const multer = require('multer');
const path = require('path');

// >>>>>>>>>>>>>>>>>>>>>>>> FILE UPLOAD SETUP <<<<<<<<<<<<<<<<<<<<<<<<<<< //
// Using `multer` to handle company logo uploads

const storage = multer.diskStorage({
    destination: './uploads/', // Save files to the uploads folder
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
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
        return res.status(400).json({ error: 'All fields are required' });
    }

    pool.query(
        'INSERT INTO jobs (title, description, requirements, location, company, recruiter_id, is_open, company_logo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [
            title,
            description,
            requirements,
            location,
            company,
            recruiter_id,
            is_open || true,
            companyLogo,
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
    const { title, description, requirements, location, is_open } = req.body; // Get updated fields

    // Check if at least one field is provided
    if (
        !title &&
        !description &&
        !requirements &&
        !location &&
        is_open === undefined
    ) {
        return res
            .status(400)
            .json({ error: 'At least one field is required to update' });
    }

    // Update job in database
    pool.query(
        'UPDATE jobs SET title = $1, description = $2, requirements = $3, location = $4, is_open = $5 WHERE id = $6 RETURNING *',
        [title, description, requirements, location, is_open, jobId]
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
