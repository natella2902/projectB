var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');

router.post('/', userController.createUser);
router.get('/:userId', userController.getById);
router.patch('/:userId', userController.updateUserData);

// router  getCurrentUser(get Me)
// router changeEmail(check password)
// router changePassword(check old password)

module.exports = router;
