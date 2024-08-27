const express = require('express');
const db = require('./db'); // Import the database connection
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
    getAllMembers((err, members) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }

        const nonMentors = members.filter(member => member.mentor === 0);
        res.json(nonMentors);
    });
});

app.get("/mentors", (req, res) => {
    getAllMembers((err, members) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }

        const nonMentors = members.filter(member => member.mentor === 1);
        res.json(nonMentors);
    });
});

app.get("/seasons", (req, res) =>{
    const query="SELECT * FROM Seasons";

    db.query(query, (err, result) =>{
        if(err){
            console.error("An error has occured:", err);
            res.status(500).json({error: "Database query error"});
            return;
        }

        res.json(result);
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
