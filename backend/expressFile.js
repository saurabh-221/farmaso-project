const express=require('express')
var bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))

var server=app.listen(8080,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Backend server has started")
})

module.exports=app