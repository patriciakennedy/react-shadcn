// Import required modules
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dev_hiree',
    password: 'test722',
    port: 5432,
});

// Export the pool for use in other files
module.exports = pool;
