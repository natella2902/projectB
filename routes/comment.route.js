var express = require('express');
var router = express.Router();
var commentController = require('../controllers/comment.controller');


router
    .route('/')
    .post(commentController.createComment)

router
    .route('/:commentId')
    .patch(commentController.updateComment)

router
    .route('/:commentId/add')
    .patch(commentController.addReplyComment)

router
    .route('/:commentId')
    .delete(commentController.removeComment)

module.exports = router;
