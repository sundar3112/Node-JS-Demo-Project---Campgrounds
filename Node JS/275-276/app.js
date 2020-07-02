var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Allen", "Nachi" , "Sai" ," Thomas" ," Sashank"];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/",function(req,res)
{
    res.render("home");
});

app.get("/friends",function(req,res)
{
    res.render("friends",{friends : friends});
});

app.post("/addfriend",function(req,res)
{
    var newf = req.body.newFriend;
    friends.push(newf);
    res.redirect('/friends');
});
app.listen(3000,console.log("Server connected"));