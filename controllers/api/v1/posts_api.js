const Post = require('../../../models/post');
const Comment = require('../../../models/comments');

module.exports.index = async function(req, res){

    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
      path: 'comments',
      populate: {
          path :'user'
      }
  })

    return res.json(200, {
        message: 'Lists of Posts',
        posts: posts
    });

}


module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findById(req.params.id);

        //if (post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post : req.params.id});

            return res.json(200, {
                message: 'post & associated comments deleted successfully!'
            })

            // if(req.xhr){
            //     return res.status(200).json({
            //         data:{
            //             post_id : req.params.id
            //         },
            //         message: 'post deleted'
            //     })
            // }

            //req.flash('error', 'Post & Comments Deleted')
            //return res.redirect('back');
            
        // }else{
        //     req.flash('error', 'you cannot delete this post')
        //     return res.redirect('back')
        // }
    }catch(err){
        //req.flash('error', err);
        console.log('****', err);
        return res.json(500, {
            message : 'internal server error'
        }) ;
    }
}