const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '1111',
  database: 'tableTime'
});

module.exports = pool;
