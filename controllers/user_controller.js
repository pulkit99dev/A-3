let User = require('../models/user');
let Post = require('../models/post');

const fs = require('fs');
const path = require('path')


module.exports.user = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('user', {
            title : 'User Profile',
            profile_user : user
        });
    } )
   
}

module.exports.update = async function(req, res){
    if(req.user.id == req.params.id){

        try{
            let user = await User.findById(req.params.id);
            User.uploadedAvatar(req, res, function(err){
                if(err){console.log('***Multer Error: ', err)}
                // console.log(req.file);
                user.name = req.body.name;
                user.email = req.body.email;

                if(req.file){

                    if(user.avatar){
                        fs.unlinkSync(path.join(__dirname, '..', user.avatar))
                    }

                    user.avatar = User.avatarPath + '/' + req.file.filename
                }
                user.save();
                return res.redirect('back')
            });
        }catch(err){
            req.flash('error', err);
            return res.redirect('back');
        };

    }else{
        req.flash('error', 'Unauthorized');
        return res.status(401).send('Unauthorized')
    }
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
    req.flash('success', 'Successfully logged in');
    return res.redirect('/');
}

// log-out from session

module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'Successfully logged out');
    return res.redirect('/')
}

