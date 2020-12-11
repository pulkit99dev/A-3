const express = require('express');

let router = express.Router();

const homeController = require('../controller/home_controller');

router.get('/', homeController.home);

module.exports = router;

