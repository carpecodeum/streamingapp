var express = require('express');
var app = express();
var mongo = require('./mongodbconnect');
app.use(express.static('public'));
app.get('/',(req,res)=>{res.sendFile(__dirname+"/"+"login.html")});
console.log("hello world");
var server=app.listen(8081,function(){
    var host=server.address().address;
    var port = server.address().port;
    console.log("server listen http:\\%s:%s",host,port);
});
