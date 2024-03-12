const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost', // 예: 'localhost'
  user: 'root', // 예: 'root'
  password: '1111',
  database: 'tableTime'
});

module.exports = pool;
