const con=require('./connection/sqlConnection')
const app=require('./expressFile')

// for displaying items on the home page when user is logged-off
// Will only display him 12 items
// for viewing the rest of the items ask him for log-in
app.get('/home', function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    con.query(Item.getFirstTwelveItems(), function(error, results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

// When user registers and logins then he can view all items according to a particular location
app.get('/home/:Location', function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/:Location');
    con.query(Item.getFirstTwelveItems(), [req.params.Location],function(error, results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

// When user clicks on a particular item he is able to see details about it along with some information about vendor
app.get('/home/:Item_Id', function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/:Item_Id');
    con.query(Item.itemDetails(), function(error, results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

// When user clicks on a particular item he is able to see details about it along with some information about vendor
app.get('/home/:Item_Id', function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/:Item_Id');
    con.query(Item.itemDetails(), function(error, results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

// get all products inside the cart of a particular lendor
// When user clicks on a particular item he is able to see details about it along with some information about vendor
app.get('/home/:Lender_Id', function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/:Lender_Id');
    con.query(Item.itemsInLenderCart(), function(error, results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
})

