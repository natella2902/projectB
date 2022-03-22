var express = require('express');
var router = express.Router();
var projectController = require('../controllers/project.controller');


router
    .route('/')
    .post(projectController.createProject)

router
    .route('/:projectId')
    .get(projectController.getProjectById)
    .patch(projectController.updateProject)

// router archive project
// router get project by user id

module.exports = router;
