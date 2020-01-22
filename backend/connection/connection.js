const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jain@123",
    database: "farmaso",
})

connection.connect((err) => {
    if(err) throw err;
    console.log('connected');
})

module.exports = connection;