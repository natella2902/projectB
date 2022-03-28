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

router
    .route('/:projectId/archive')
    .patch(projectController.archiveProject)

router
    .route('/:userId')
    .get(projectController.getProjectByUserAccess)

module.exports = router;
