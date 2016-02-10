var port = 3001;
var express = require('express');
var app = express();

app.get("/", function(req,res){
    res.end("hello world is bojangles");
});
    
app.listen(port);