// Import required modules
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'dev_hiree',
    password: process.env.DB_PASSWORD || 'test722',
    port: process.env.DB_PORT || 5432,
});

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'dev_hiree',
//     password: 'test722',
//     port: 5432,
// });

// Export the pool for use in other files
module.exports = pool;
