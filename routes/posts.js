const express = require('express')

let router = express.Router();

let postController = require('../controller/post_controller');

router.post('/create', postController.create);

module.exports = router;