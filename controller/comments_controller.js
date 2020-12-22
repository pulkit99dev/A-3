let Post = require('../models/post');
let Comment = require('../models/comment');

module.exports.create = function(req, res){
    Post.findById(req.body.post, function(err, post){
        if(post){
            Comment.create({
                comment = req.body.comment,
                user = req.user._id,
                post = req.user.post
            },
            function(err, comment){
                post.comment.push(comment);
                post.save();
                res.redirect('/')
            }
            )
        }
    })
}