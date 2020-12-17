let User = require('../models/user')

module.exports.user = function(req, res){
    res.render('user', {
        title : 'User Profile'
    });
}

module.exports.login = function(req, res){
    return res.render('login', {
        title : 'User Login'
    });
};

module.exports.signup = function(req, res){
    return res.render('signup',{
        title :'User Sign-in'
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