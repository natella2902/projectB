var express = require('express');
var router = express.Router();
var essenceController = require('../controllers/essence.controller');


router
    .route('/')
    .post(essenceController.createEssence)

router
    .route('/:essenceId')
    .patch(essenceController.updateEssence)

router
    .route('/:essenceId/archive')
    .patch(essenceController.archiveEssence)



module.exports = router;
