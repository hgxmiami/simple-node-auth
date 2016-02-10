var port = 3001;
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use( express.static('views') );
app.use( bodyParser.urlencoded( { extended: false } ) );
//more info on serving static files:
// http://express.js.com/en/starter/static-files.html

app.get("/", function(req,res){
    res.sendFile(path.resolve("views/register.html"));
});

//example of handline requestys parameters:

app.get("/whatsmyname/:nameArg", function(req, res){
  res.end("Your name is " + req.params.nameArg);  
});



app.listen(port);