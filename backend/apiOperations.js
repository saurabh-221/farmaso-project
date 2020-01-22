const con = require('../server/database/sqlConnection')
const app = require('../server/server')
const Item = require('./item')
app.get('/product', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/product');
    con.query(Item.getAllProducts(), function (error, results) {
        console.log(error)
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})
app.get('/product/:p_Id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/product/:p_Id');
    con.query(Item.getSingleProduct(req.params.p_Id), function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})
app.post('/product', (req, res) => {
    const newItem = req.body;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/product');
    con.query(Item.addProduct(), newItem, (error, results) => {
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
})
app.delete('/product/:p_Id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/product/:p_Id');
    con.query(Item.deleteProductById(req.params.p_Id), (error, results) => {
        if(error) throw error;
        res.end(JSON.stringify(results));
    })
})