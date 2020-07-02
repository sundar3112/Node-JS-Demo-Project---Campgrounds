var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [
    {name : "Campground 1" , image : "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1988&q=80"},
    {name : "Campground 2" , image : "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
    {name : "Campground 3" , image : "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {name : "Campground 4" , image : "https://static8.depositphotos.com/1029554/813/i/450/depositphotos_8137864-stock-photo-camping-tents-at-campground.jpg"},
    {name : "Campground 5" , image : "https://newhampshirestateparks.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name : "Campground 6" , image : "http://www.riverviewcampground.ca/wp-content/uploads/2018/06/campinglogo-300x200.jpg"},
    {name : "Campground 7" , image : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg"}
]


app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");


app.get("/",function(req,res)
{
    res.render("landing");
});

app.get("/campgrounds",function(req,res)
{
    res.render("campgrounds",{campgrounds : campgrounds});
    //console.log(campgrounds);
});

app.post("/campgrounds",function(req,res)
{
    var name = req.body.name;
    var image = req.body.image;
    //console.log(name,image);
    var newCampground = {name : name , image : image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res)
{
    res.render("new");
});



app.listen(3000,console.log("YelpCamp has started"));