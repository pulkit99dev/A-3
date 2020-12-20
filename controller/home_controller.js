const Post = require("../models/post");
const { post } = require("../routes");

module.exports.home = function(req, res){

    //console.log(req.cookies);
    //res.cookie('new', 10)
//     Post.find({}, function(err, posts){
//         if(err){console.log(`Error while finding`)}
//         return res.render('home', {
//         title : 'A-3',
//         posts : posts
//     });
// })

    Post.find({}).populate('user').exec(function(err, posts){
        if(err){console.log(`Error while finding`)}
        return res.render('home', {
        title : 'A-3',
        posts : posts
    });
    })
}