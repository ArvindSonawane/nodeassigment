
 var express = require('express'); 
var app = express();
var fs = require("fs");
const findArea=require("./circle.js");
const findVolume=require("./sphere.js");
var fs = require("fs");


app.get('/volume', function(req, res){
    
        res.end("Volume of Sphere is :" + Volume); 
    });
    app.get('/area', function(req, res){
    
        res.end("Area of Circle is :" + Area);
    });
console.log("Volume of Sphere is :" + Volume);
console.log("Area of Circle is :" + Area);

var server = app.listen(3007, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})
