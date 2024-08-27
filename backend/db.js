// db.js
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'srv446.hstgr.io',
  user: 'u726890226_admin',
  password: 'passDataBase1',
  database: 'u726890226_IDL',
  port: 3306
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
