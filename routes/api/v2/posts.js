const express = require('express');

let router = express.Router();

const postApi = require('../../../controllers/api/v2/posts_api2');

router.get('/', postApi.index);



module.exports = router;