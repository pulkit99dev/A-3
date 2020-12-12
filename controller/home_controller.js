module.exports.home = function(req, res){

    console.log(req.cookies);
    res.cookie('new', 10)

    return res.render('home', {
        title : 'Learning Partial & Layouts'
    });
}