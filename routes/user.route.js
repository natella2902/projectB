var express = require('express');
var router = express.Router({ mergeParams: true });
var userController = require('../controllers/user.controller');

router
    .route("/")
    .post(userController.createUser)

router
    .route('/:userId')
    .get(userController.getById)
    .patch(userController.updateUserData)

// router  getCurrentUser(get Me)
// router changeEmail(check password)
// router changePassword(check old password)

module.exports = router;
