// Import require modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import pool (database connection)
const pool = require('./config/pool');

// Import route files
const userRoutes = require('./routes/users');
const jobRoutes = require('./routes/jobs');

// Create an Express application
const app = express();

// Middleware Setup
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
