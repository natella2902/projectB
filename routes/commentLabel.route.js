var express = require('express');
var router = express.Router();
var commentLabelController = require('../controllers/commentLabel.controller');

router
    .route('/')
    .post(commentLabelController.createCommentLabel)

router
    .route('/:commentLabelId')
    .patch(commentLabelController.updateCommentLabel)
    .get(commentLabelController.getCommentLabel)

router
    .route('/:projectId')
    .get(commentLabelController.getCommentLabelByProjectId)


module.exports = router;
