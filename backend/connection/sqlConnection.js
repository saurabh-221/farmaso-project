var mysql = require('mysql');

var con = mysql.createConnection({
    host: "bnvkmrtnrxyruuiegz0x-mysql.services.clever-cloud.com",
    user: "ulvikermwzpadixd",
    password: "nsnrBlPmaAvQobOiwi6d",
    database: "bnvkmrtnrxyruuiegz0x"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected');
});

module.exports = con;