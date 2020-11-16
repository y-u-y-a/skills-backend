const mysql = require('mysql');

const port = 3306
exports.conn = mysql.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: 'root'
  });
