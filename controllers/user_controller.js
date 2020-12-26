let User = require('../models/user');
let Post = require('../models/post');

module.exports.user = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('user', {
            title : 'User Profile',
            profile_user : user
        });
    } )
   
}

module.exports.login = function(req, res){

    if(req.isAuthenticated()){
       return res.redirect('/user/profile');
    };

    return res.render('login', {
        title : 'User Login'
    });
};

module.exports.signup = function(req, res){

     if(req.isAuthenticated()){
        return res.redirect('/user/profile');
 };

    return res.render('signup',{
        title :'User Sign-up'
    });
};

// getting the sign-up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back')
    };
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('Error in finding user while signing up')
        return;} 
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('Error in creating user');return}
                return res.redirect('/user/log-in'); 
            });
        }else{
            return res.redirect('back')
        };

            });
        }
//later

module.exports.createSession = function(req, res){
    return res.redirect('/');
}

// log-out from session

module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/')
}

