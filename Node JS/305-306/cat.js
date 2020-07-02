var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/demo', {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number
});

var Cat = mongoose.model("Cat",catSchema);

// var kitty = new Cat({
//     name: "kanna",
//     age:12
// });

// kitty.save(function(err,cat)
// {
//     if(err)
//     {
//         console.log("Error occurred");
//     }
//     else
//     {
//         console.log("Added to database");
//         console.log(cat);
//     }
// });
Cat.create({
    name:"kimsy",
    age:12
},function(err,cat)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(cat);
    }
});
Cat.find({},function(err,cats)
{
    if(err)
    {
        console.log("Error occurred");
    }
    else
    {
        console.log("DATA");
        console.log(cats);
    }
});