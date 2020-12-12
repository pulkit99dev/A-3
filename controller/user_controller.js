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
module.exports.create = function(req, res){}
//later

module.exports.createSession = function(req, res){}