const router = require('express').Router();
const con = require('../database/sqlConnection')

router.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/product');
    con.query('select * from Product', function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

router.get('/:p_id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/product/:p_Id');
    con.query(`select * from Product where Item_Id = ?`, req.params.p_ID, function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

router.post('/', function (req, res) {
    const newItem = req.body;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/product');
    con.query('insert into Product values ?', newItem, function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

router.delete('/:p_id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/product');
    con.query('delete from Product where Item_Id = ?', req.params.p_Id, function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

module.exports = router;