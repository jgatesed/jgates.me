var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(9090, '127.0.0.1', function(req,res){
	console.log("Listening on port 9090");
});

app.get('/', function(req, res){
  res.sendfile('index.html');
});
