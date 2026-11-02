const pool = require('./config/db');

(async () => {
    const [rows] = await pool.query('SELECT * FROM menu');
    console.log(rows);
    process.exit();
})();