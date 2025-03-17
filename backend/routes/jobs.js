const express = require('express');
const router = express.Router();
const pool = require('../config/pool');

// >>>>>>>>>>>>>>>>>>>> GET /api/jobs - Fetch all jobs <<<<<<<<<<<<<<<<<<<< //
router.get('/', (req, res) => {
    pool.query('SELECT * FROM jobs')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error('Error fetching jobs:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// >>>>>>>>>>>>>>>>>>>> GET /api/jobs/:id - Fetch job by ID <<<<<<<<<<<<<<<<<<<< //
router.get('/:id', (req, res) => {
    const jobId = req.params.id; // Extract the job ID from the request

    pool.query('SELECT * FROM jobs WHERE id = $1', [jobId])
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json(result.rows[0]); // Return the job details
        })
        .catch((error) => {
            console.error('Error fetching job:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// >>>>>>>>>>>>>>>>>>>>>> POST ROUTE - Create a new jobb<<<<<<<<<<<<<<<<<<<<<<<<< //

// Create a new job
router.post('/', (req, res) => {
    const {
        title,
        description,
        requirements,
        location,
        company_id,
        recruiter_id,
        is_open,
    } = req.body;

    // Ensure all required fields are provided
    if (
        !title ||
        !description ||
        !requirements ||
        !location ||
        !company_id ||
        !recruiter_id
    ) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    pool.query(
        'INSERT INTO jobs (title, description, requirements, location, company_id, recruiter_id, is_open) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [
            title,
            description,
            requirements,
            location,
            company_id,
            recruiter_id,
            is_open || true,
        ]
    )
        .then((result) => res.status(201).json(result.rows[0])) // Send back the created job
        .catch((error) => {
            console.error('Error adding job:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// >>>>>>>>>>>>>>>>>>>> DELETE /api/jobs/:id - Remove a job listing <<<<<<<<<<<<<<<<<<<< //
router.delete('/:id', (req, res) => {
    const jobId = req.params.id; // Extract the job ID from the request

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
    const jobId = req.params.id; // Get the job ID from the URL
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

    // Update job in the database
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
