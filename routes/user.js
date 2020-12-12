const express = require('express');

let router = express.Router();

let userController = require('../controller/user_controller');

router.get('/profile', userController.user);

//Log-in
router.get('/log-in', userController.login);
//Sign-up
router.get('/sign-up', userController.signup);

module.exports = router;