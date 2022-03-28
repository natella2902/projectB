var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller');

router
    .route('/')
    .post(productController.createProduct);

router
    .route('/:productId/archive')
    .patch(productController.archiveProduct);

router
    .route('/:productId')
    .patch(productController.updateProduct);

module.exports = router;
