const express = require('express');

let router = express.Router();


router.use('/posts', require('./posts'))
router.use('/user', require('./users'));


module.exports = router;