const pool = require('./config/pool');

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Database connected successfully:', res.rows);
    }
    pool.end();
});
