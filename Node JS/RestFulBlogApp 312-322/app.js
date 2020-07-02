var express         = require("express"),
    app             = express(),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    expressSantizer = require("express-sanitizer");
// APP/CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser:true});
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSantizer())
app.use(methodOverride("_method"));

// MONGOOSE MODEL/CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date , default: Date.now}
});

var blog = mongoose.model("blog",blogSchema);

// blog.create({
//     title: "TEST BLOG",
//     image: "https://images.unsplash.com/photo-1529927066849-79b791a69825?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
//     body: "This is a test blog"
// });


// ROUTES

app.get("/",function(req,res){
    res.redirect("/blogs");
});
app.get("/blogs",function(req,res){
    blog.find({},function(err,blogs)
    {
        if(err)
            console.log(err);
        else
        {
            res.render("index",{blogs : blogs});
        }
    });
});

app.get("/blogs/new",function(req,res){
    res.render("new");
});

app.post("/blogs",function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    blog.create(req.body.blog,function(err, newBlog){
        if(err)
            res.render("new");
        else
            res.redirect("/blogs");
    });
});

app.get("/blogs/:id",function(req,res){
    blog.findById(req.params.id,function(err,blogFound){
        if(err)
            res.redirect("/blogs");
        else
        {
            res.render("show",{blog : blogFound});
        }
    });
});

app.get("/blogs/:id/edit",function(req,res){
    blog.findById(req.params.id,function(err,blogFound){
        if(err)
            res.redirect("/blogs");
        else
        {
            res.render("edit",{blog : blogFound});
        }
    });
});

app.put("/blogs/:id",function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog){
        if(err)
            res.redirect("/blogs");
        else
        {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

app.delete("/blogs/:id",function(req,res){
    blog.findByIdAndRemove(req.params.id, function(err){
        if(err)
            res.redirect("/blogs");
        else
        res.redirect("/blogs");
    });
});
app.listen(3000,function()
{
    console.log("server running");
});