// let Post = require('../models/post');
// let Comment = require('../models/comment');

// module.exports.create = function(req, res){
//     Post.findById(req.body.post, function(err, post){
//         if(post){
//             Comment.create({
//                 content : req.body.content,
//                 user : req.user._id,
//                 post : req.user.post
//             },
//             function(err, comment){
//                 if(err){
//                     console.log('error')
//                 }else{
//                 post.comments.push(comment);
//                 post.save();
//                 res.redirect('/');
//                 }
//             });
//         }
//     });
// }

const Comment = require('../models/comments');
const Post = require('../models/post');
const commentsMailer = require('../mailers/comment_mailers')

module.exports.create = async function(req, res){

    try{
        let post = await Post.findById(req.body.post);

        if (post){
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });
                // * handle error

                post.comments.push(comment);
                post.save();

                comment = await comment.populate('user', 'name email').execPopulate();
                commentsMailer.newComment(comment);
                if(req.xhr){
                    return res.status(200).json({
                        data: {
                            comment :comment
                        },
                        message :'Post Created'
                    })
                }

                req.flash('success', 'Comment Published');
                res.redirect('/');
        }
    }catch(err){
        req.flash('error', err)
    }   
}

module.exports.destroy = async function(req, res){

    try{
        let comment = await Comment.findById(req.params.id);
        if(comment.user == req.user.id){
            let postId = comment.post;
            comment.remove();
            let post = await Post.findByIdAndUpdate(postId, { $pull: {comments : req.params.id}})
            req.flash('success', 'comment deleted')
                return res.redirect('back');
        }else{
            req.flash('error', 'failed to delete comment')
            return res.redirect('back');
        }
    }catch(err){
        req.flash('error', err);
    } 
}