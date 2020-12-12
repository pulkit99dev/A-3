const express = require('express');

let router = express.Router();

const homeController = require('../controller/home_controller');

router.get('/', homeController.home);

router.use('/user', require('./user'));


// // Sign-up page
// router.use('/user', require('./signup'));
// //log-in page
// router.use('/user', require('./login'));

module.exports = router;

