var express = require('express');
var router = express.Router();
var projectController = require('../controllers/project.controller');


router.post('/', projectController.createProject);
router.get('/:projectId', projectController.getProjectById);
router.patch('/:projectId', projectController.updateProject);

// router archive project
// router get project by user id

module.exports = router;
