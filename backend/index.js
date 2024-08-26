const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
let myTeam;

const connection = mysql.createConnection({
    host: 'srv446.hstgr.io',
    user: 'u726890226_admin',
    password: 'passDataBase1',
    database: 'u726890226_IDL',
    port: 3306
});

connection.connect((err) => {
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }else{
        console.log("Logged in");
    }
});

$query = "SELECT * FROM team";

connection.query($query, (err, result, fields) =>{
    if(err){
        console.log("An error has occured");
    }
    
    // console.log(result);
    myTeam = result;
});

connection.end(() => {console.log("Logged out")});

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/members", (req, res) =>{
    res.json(myTeam);
});


app.listen(5000, () => {console.log("Server started on port 5000")});