// Import required modules
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

// Import database connection
const pool = require('./config/pool');

// Import route files
const userRoutes = require('./routes/users');
const jobRoutes = require('./routes/jobs');
const authRoutes = require('./routes/auth'); // Google OAuth routes

// Import Passport configuration
require('./config/passport');

// Create an Express application
const app = express();

// Middleware Setup
app.use(
    cors({
        origin: 'http://localhost:5173', // Adjust if frontend URL is different
        credentials: true, // Allow sending cookies with requests
    })
);

app.use(express.json());

// Session Middleware (Required for Passport & Authentication)
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }, // Set to `true` in production with HTTPS
    })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/auth', authRoutes); // Google OAuth authentication routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
