var express = require("express")
var app = express();

app.get("/",function(req,res)
{
    res.send("Hi there welcome");
});

app.get("/speak/:animalName",function(req,res)
{
    var aniName= req.params.animalName;
    if(aniName == "pig")
    {
        res.send("The pig says 'Oink'");
    }
    else if(aniName == "cow")
    {
        res.send("The cow says 'Moo'");
    }
});

app.get("/repeat/:text/:times",function(req,res)
{
    var text=req.params.text;
    var time=Number(req.params.times);
    var final="";
    for(var i=0;i<time;i++)
    {
        final=final+" "+text;
    }
    res.send(final);
});

app.get("*",function(req,res)
{
    res.send("Sorry wrong page Error");
});
app.listen(3000,function(req,res)
{
    console.log("server started");
});