var port = 3001;
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var userStore = {
  hugo: {hashedPassword: "7c6a180b36896a0a8c02787eeafb0e4c",
         email: "hgxmiami00@gmail.com"},
  kiki: {hashedPassword: "6cb75f652a9b52798eb6cf2201057c73",
         email: "kikiqianlin@gmail.com"}
};

app.use( express.static('views') );
app.use(   bodyParser.urlencoded( {extended: false} )   );
//more info on serving static files:
// http://expressjs.com/en/starter/static-files.html

app.get("/", function(req, res){
  res.sendFile(path.resolve("views/register.html"));
});

app.get("login", function(req,res) {
    res.sendFile(path.resolve("views/login.html"));
});
//REGISTRATION ROUTE
app.post("/", function(req,res){
  //if they didn't send a username or didnt send a
  //password, respond with an error
  if (!req.body.username || !req.body.password){
    res.end("Username and password both required");
    return;
  }
 
  
  var userNameInRequest = req.body.username;
  userStore[userNameInRequest] = { hasedPassword: hash,
                                  email: req.body.email};
  res.end('Thanks for registering ' + userNameInRequest);
  console.log(JSON.stringify(userStore));
});

app.post("/login", function(req, res){
   //if username doesnt exist in user store, return error
    if ( !req.body.username || !req.body.password){
        res.end("Username and password required");
        return;
    }
    if ( !userStore[req.body.username] ){
        res.end("That user doesnt exist yet. Please register.");
        return;
    }
   var hash = crypto
      .createHash("md5")
      .update(req.body.password)
      .digest('hex'); 
    if (userStore[req.body.username].hashedPassword != hash) {
        res.edu("Your password was wrong");
        return;
    }
    res.edu("Congratulations, your logged in");
    console.log("User "+req.body.username+" logged in")
});


app.listen(port);
console.log("Server listening at port "+port);
console.log("Current user store is :");
console.log(JSON.stringify(userStore));

