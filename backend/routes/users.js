const express = require('express');
const router = express.Router();
const pool = require('../config/pool');

// GET all users
router.get('/', (req, res) => {
    pool.query('SELECT * FROM users')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;
