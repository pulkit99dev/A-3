const Post = require('../models/post')

//creating post
module.exports.create = function(req, res){
    Post.create({
        content : req.body.content,
        user : req.user._id
    },
    function(err, post){
        if(err){
        console.log(`Error while creating Post`);
        return;}
        res.redirect('back')
    });
};