const express = require('express');
const router = express.Router();
const pool = require('../config/pool');

// GET all states
router.get('/', (req, res) => {
    pool.query('SELECT * FROM states ORDER BY name ASC')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error('Error fetching states:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;
