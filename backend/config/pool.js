// Import required modules
const { Pool } = require('pg');
require('dotenv').config();

// Setup database connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

// Export pool for use in other files
module.exports = pool;

///////////////////////////////////////////////////////////

// // Import required modules
// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'dev_hiree',
//     password: 'test722',
//     port: 5432,
// });

// // Export the pool for use in other files
// module.exports = pool;
