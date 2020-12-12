const express = require('express');
let router = express.Router();

let signupController = require('../controller/signup_controller');

router.get('/sign-up', signupController.signUp);

module.exports = router;