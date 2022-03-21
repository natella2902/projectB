var express = require('express');
var router = express.Router({ mergeParams: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', require('./user.route'))
router.use('/project', require('./project.route'))

module.exports = router;
