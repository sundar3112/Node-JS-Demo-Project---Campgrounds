var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo",{useUnifiedTopology: true,useNewUrlParser:true});

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User=mongoose.model("User",userSchema);

User.findOne({name:"ABC"},function(err,user){
    if(err)
        console.log(err);
    else
    {
        user.posts.push({
            title:"ABC post #2",
            content:"This the 2nd post by ABC"
        });
        user.save(function(err,userFinal){
            if(err)
                console.log(err);
            else
            console.log(userFinal);
        });
    }
});




// newUser.save(function(err,user){
//     if(err)
//         console.log(err);
//     else
//     console.log(user);
// });

// var newUser = new User({
//     email: "abc@gmail.com",
//     name: "ABC"
// });

// newUser.posts.push({
//     title:"ABC post",
//     content:"This is the post by ABC."
// });


// var newPost=new Post({
    //     title:"New Post",
    //     content:"This is the content of new post"
    // });
    
    // newPost.save(function(err,post){
        //     if(err)
        //         console.log(err);
        //     else
        //         console.log(post);
// });