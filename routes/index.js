const express = require('express');

let router = express.Router();

const homeController = require('../controller/home_controller');

router.get('/', homeController.home);

router.use('/user', require('./user'));

module.exports = router;

