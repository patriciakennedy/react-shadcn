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

module.exports = router;
