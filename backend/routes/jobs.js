const express = require('express');
const router = express.Router();
const pool = require('../config/pool');

// GET /api/jobs - Fetch all jobs
router.get('/', (req, res) => {
    pool.query('SELECT * FROM jobs')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error('Error fetching jobs:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// <-------------> POST Route ---------------------------------->
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

module.exports = router;
