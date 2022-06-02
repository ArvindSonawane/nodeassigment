
var express = require('express'); 
var app = express();
var fs = require('fs'); 
app.get('/getVegetables', function(req, res){
    fs.readFile(__dirname + "/" + "vegetables.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); 
    });
})
var vegetable = {
    "vegetables3": {
        "id":3,
       "leafy vegetables":"gajar"
       
      },
} 

var server = app.listen(3003, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})