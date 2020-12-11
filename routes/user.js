const express = require('express');

let router = express.Router();

let userController = require('../controller/user_controller');

router.get('/profile', userController.user);

module.exports = router;