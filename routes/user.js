const express = require('express');

let router = express.Router();

const passport = require('passport');

let userController = require('../controller/user_controller');

router.get('/profile', passport.checkAuthentication , userController.user);

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

module.exports = router;