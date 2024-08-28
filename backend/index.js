const express = require('express');
const pool = require('./db'); // Import the database connection
const cors = require('cors');

const app = express();
const port = 5000;

function getAllMembers(callback) {
    const query = 'SELECT * FROM team';
    
    db.query(query, (err, result) => {
        if (err) {
            console.error('An error has occurred:', err);
            return callback(err, null); // Pass error to callback
        }
        
        callback(null, result); // Pass result to callback
    });
}

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/members", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error getting connection from pool:', err);
          return;
        }
    
        const query = "SELECT * FROM team";

        pool.query(query, (err, result) => {
            
            connection.release();

            if (err) {
                console.error("An error has occurred:", err);
                res.status(500).json({ error: "Database query error" });
                return;
            }
            
            res.json(result);
        });
    });
});

app.get("/seasons", (req, res) =>{

    pool.getConnection((err, connection) => {

        if(err){
            console.error('Error getting connection from pool:', err);
            return;
        }

        const query="SELECT * FROM Seasons";

        pool.query(query, (err, result) =>{

            connection.release();
            if(err){
                console.error("An error has occured:", err);
                res.status(500).json({error: "Database query error"});
                return;
            }

            res.json(result);
        });
    });
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
