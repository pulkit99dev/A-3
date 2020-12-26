const express = require('express');

let router = express.Router();

const passport = require('passport');

let userController = require('../controllers/user_controller');

router.get('/profile/:id', passport.checkAuthentication , userController.user);
router.post('/update/:id', passport.checkAuthentication , userController.update);


//Log-in
router.get('/log-in', userController.login);
//Sign-up
router.get('/sign-up', userController.signup);

router.post('/create', userController.create);

//signout
router.get('/logout', userController.destroySession);


//use Passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user/log-in'}
) , userController.createSession)

//creting posts

module.exports = router;