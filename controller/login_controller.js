module.exports.logIn = function(req, res){
    return res.render('login', {
        title : 'User Login'
    });
};