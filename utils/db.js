const Pool = require('pg').Pool;
const pool = new Pool({
    user: "aidanterlizzi",
    password: 'snakeboot1492',
    host: 'localhost',
    port: 5432,
    database: 'kdb'
});

module.exports = pool;