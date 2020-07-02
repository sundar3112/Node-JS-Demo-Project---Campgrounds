var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{useUnifiedTopology: true,useNewUrlParser:true});

var Post=require("./models/posts");
var User=require("./models/users");


// Post.create({
//     title:"ABC post definetly part 3",
//     content:"This has to map as the post of ABC part 3."

// },function(err,post){
//     if(err)
//         console.log(err);
//     else
//     {
//         User.findOne({name:"ABC"},function(err,foundUser){
//             if(err)
//                 console.log(err);
//             else
//             {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err,data){
//                     if(err)
//                         console.log(err);
//                     else
//                         console.log(data);
//                 })
//             }
//         });
//     }
// });

// User.findOne({name:"ABC"},function(err,foundUser){
//     if(err)
//         console.log(err);
//     else
//     {
//         Post.findOne({title:"ABC post definetly"},function(err,post){
//             if(err)
//                 console.log(err);
//             else
//             {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err,userFinal){
//                     if(err)
//                         console.log(err);
//                     else
//                         console.log(userFinal);
//                 });
//             }

//         })
//     }
// });

// User.create({
//     email:"ABC@gmail.com",
//     name:"ABC"
// });

User.findOne({name:"ABC"}).populate("posts").exec(function(err,user){
    if(err)
        console.log(err);
    else
        console.log(user);
});