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