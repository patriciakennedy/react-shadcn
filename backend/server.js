// Import require modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./pool'); // Import database connection

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON data

// Default route (for testing)
app.get('/api/users', (req, res) => {
    pool.query('SELECT * FROM users')
        .then((result) => res.json(result.rows)) // Send data as JSON
        .catch((error) => {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// Define PORT and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
