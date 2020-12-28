const Post = require('../models/post')
const Comment = require('../models/comments')

//creating post
module.exports.create = async function(req, res){
    
    try{
        await Post.create({
            content : req.body.content,
            user : req.user._id
        })

        if(req.xhr){
            return res.status(200).json({
                data : {
                    post : post
                },
                message : 'post created'
                }
            )
        }

        req.flash('success', 'Post Created')
        res.redirect('back')
    }catch(err){
        req.flash('success', err);
        res.redirect('back')
    }
}
    // function(err, post){
    //     if(err){
    //     console.log(`Error while creating Post`);
    //     return;}

module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post : req.params.id});

            if(req.xhr){
                return res.status(200).json({
                    data:{
                        post_id : req.params.id
                    },
                    message: 'post deleted'
                })
            }

            req.flash('error', 'Post & Comments Deleted')
            return res.redirect('back');
            
        }else{
            req.flash('error', 'you cannot delete this post')
            return res.redirect('back')
        }
    }catch(err){
        req.flash('error', err);
        return ;
    }
}