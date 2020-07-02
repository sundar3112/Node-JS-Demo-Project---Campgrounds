var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res)
{
    res.render("home.ejs");
});

app.get("/love/:thing",function(req,res)
{
    var thing = req.params.thing;
    res.render("love",{varThing : thing});
});
app.get("/data/:thing",function(req,res)
{
    var things = req.params.thing;
    var data = [
        {title : "First" , author : "Number 1"},
        {title : "Second" , author : "Number 2"},
        {title : "Third" , author : "Number 3"} 
    ];
    res.render("data",{varThing : things, datas : data});

});

app.listen(3000,console.log("Server started"));