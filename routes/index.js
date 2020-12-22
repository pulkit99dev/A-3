const express = require('express');

let router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.use('/user', require('./user'));

router.use('/posts', require('./posts'))

//creating comments
router.use('/comments', require('./comments'));


// // Sign-up page
// router.use('/user', require('./signup'));
// //log-in page
// router.use('/user', require('./login'));

module.exports = router;

