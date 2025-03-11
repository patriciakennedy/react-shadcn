const express = require('express');
const router = express.Router();
const pool = require('../pool');

// ✅ Test Route: Get all companies
router.get('/', async (req, res) => {
    pool.query('SELECT * FROM companies')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error('Error fetching companies:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;
