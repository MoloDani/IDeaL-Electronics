const mysql = require('mysql');

// Create a connection pool to the database
const pool = mysql.createPool({
  host: 'srv446.hstgr.io',
  user: 'u726890226_admin',
  password: 'passDataBase1',
  database: 'u726890226_IDL',
  port: 3306,
  connectionLimit: 10, // Adjust the pool size according to your application's needs
});

// Export the pool to use it in other parts of your application
module.exports = pool;
