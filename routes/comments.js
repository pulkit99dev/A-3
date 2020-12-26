// const express = require('express');

// const passport = require('passport');

// const router = express.Router();

// const commentController = require('../controller/comments_controller');

// router.post('/create', passport.checkAuthentication, commentController.create );

// module.exports = router;

const express = require('express');

const passport = require('passport');

const router = express.Router();


const commentsController = require('../controllers/comments_controller');

router.post('/create', passport.checkAuthentication, commentsController.create);

router.get('/destroy/:id', passport.checkAuthentication, commentsController.destroy);


module.exports = router;