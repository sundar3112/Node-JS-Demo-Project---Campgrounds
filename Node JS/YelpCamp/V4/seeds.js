var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name : "Campground 1" , 
        image : "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1988&q=80",
        description : "This is campground 1 and its decsription."
    },
    {
        name : "Campground 2" , 
        image : "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        description : "This is campground 2 and its decsription."
    },
    {
        name : "Campground 3" , 
        image : "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description : "This is campground 3 and its decsription."
    }
]



function seedDB(){
    Campground.remove({},function(err){
        if(err)
            console.log(err);
        console.log("Removed campgrounds!!");
        data.forEach(function(seed){
            Campground.create(seed,function(err,newSeed){
                if(err)
                    console.log(err);
                else
                {
                    console.log("Created campground!");
                    Comment.create({
                        text:"This is a sampe comment.",
                        author:"Sundar"
                    },function(err,comment){
                        if(err)
                            console.log(err);
                        else{
                            newSeed.comments.push(comment);
                            newSeed.save();
                            console.log("Created new comment!!");
                        }
                    });
                }
            });
    
        });
    });
    
}

module.exports = seedDB;