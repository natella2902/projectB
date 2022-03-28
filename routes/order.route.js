var express = require('express');
var router = express.Router();
var orderController = require('../controllers/order.controller');


router
    .route('/')
    .post(orderController.createOrder)

router
    .route('/:orderId')
    .patch(orderController.updateOrder)

router
    .route('/:orderId')
    .delete(orderController.removeOrder)



module.exports = router;
