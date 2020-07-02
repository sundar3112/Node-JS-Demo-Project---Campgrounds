var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB     = require("./seeds"),
    Comment    = require("./models/comment");

mongoose.connect('mongodb://localhost:27017/yelp_camp_v4', {useNewUrlParser: true,useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");
seedDB();

// var campgrounds = [
    // {name : "Campground 1" , image : "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1988&q=80"},
    // {name : "Campground 2" , image : "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
    // {name : "Campground 3" , image : "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
//     {name : "Campground 4" , image : "https://static8.depositphotos.com/1029554/813/i/450/depositphotos_8137864-stock-photo-camping-tents-at-campground.jpg"},
//     {name : "Campground 5" , image : "https://newhampshirestateparks.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
//     {name : "Campground 6" , image : "http://www.riverviewcampground.ca/wp-content/uploads/2018/06/campinglogo-300x200.jpg"},
//     {name : "Campground 7" , image : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg"}
// ]


app.get("/",function(req,res)
{
    res.render("landing");
});

app.get("/campgrounds",function(req,res)
{
    Campground.find({},function(err,allCampgrounds){
        if(err)
            console.log(err);
        else    
            res.render("campgrounds/index",{campgrounds : allCampgrounds});
    }
    )
    //console.log(campgrounds);
});

app.post("/campgrounds",function(req,res)
{
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    //console.log(name,image);
    var newCampground = {name : name , image : image , description : desc};
    Campground.create(newCampground,function(err,newCamp){
        if(err)
            console.log(err);
        else
            res.redirect("/campgrounds");
    }
    )
});

app.get("/campgrounds/new",function(req,res)
{
    res.render("campgrounds/new");
});

app.get("/campgrounds/:id",function(req,res)
{
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err)
            console.log(err);
        else{
            res.render("campgrounds/show",{campground : foundCampground});
        }
    });
});

//--------------------------------------------------------------------------
//                          COMMENTS ROUTE
//--------------------------------------------------------------------------

app.get("/campgrounds/:id/comments/new",function(req,res){
    Campground.findById(req.params.id,function(err,campground){
        if(err)
            console.log(err);
        else
            res.render("comments/new",{campground:campground});
    });
});

app.post("/campgrounds/:id/comments",function(req,res){
    Campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }
        else{
            Comment.create(req.body.comment,function(err,comment){
                if(err)
                    console.log(err);
                else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
            // console.log(req.body.comment);
        }
    });
});


app.listen(3000,console.log("YelpCamp has started"));