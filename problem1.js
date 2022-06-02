
 var express = require('express'); 
 var app = express();
 var fs = require("fs");

 
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);a
}
app.get('/', function(req, res){
     
    res.end( "your curent age is:"+ calculate_age(new Date(1982, 11, 4))); 
});

console.log("your curent age is"+calculate_age(new Date(1982, 11, 4)));



 
 
 app.get('/', function(req, res){
     
         res.end( "your curent age is:"+ calculate_age); 
     });
  
   

 
 var server = app.listen(3008, function(){
     var host = server.address().address
     var port = server.address().port
     console.log("REST API demo app listening at http://%s:%s", host, port)
 })
 