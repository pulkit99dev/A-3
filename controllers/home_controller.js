const Post = require("../models/post");
const { post } = require("../routes");
const User = require('../models/user');

module.exports.home = async function(req, res){

    //console.log(req.cookies);
    //res.cookie('new', 10)
//     Post.find({}, function(err, posts){
//         if(err){console.log(`Error while finding`)}
//         return res.render('home', {
//         title : 'A-3',
//         posts : posts
//     });
// })

//error handling try & catch

try{
  let posts = await Post.find({})
  .populate('user')
  .populate({
      path: 'comments',
      populate: {
          path :'user'
      }
  })
 
 let users = await User.find({});
 
  return res.render('home', {
      title : 'A-3',
      posts : posts,
      all_users : users
  });
}catch(err){
    console.log('Error', err)
}
}


// .exec(function(err, posts){
//     //if(err){console.log(`Error while finding`)}
    
   
// })