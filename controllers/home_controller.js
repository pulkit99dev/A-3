const Post = require("../models/post");
const { post } = require("../routes");
const User = require('../models/user');

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

    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path :'user'
        }
    })
    .exec(function(err, posts){
        //if(err){console.log(`Error while finding`)}
        User.find({}, function(err, users){
            return res.render('home', {
                title : 'A-3',
                posts : posts,
                all_users : users
            });
        })
       
    })
}