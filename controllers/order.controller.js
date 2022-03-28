const orderService = require("../services/order.service");
class OrderController {
  async createOrder(req, res, next) {
    try {
      const { statusOrder, userId, essenceId, productId, price } = req.body;
      const newOrder = orderService.create(statusOrder, userId, essenceId, productId, price);
      res.send(newOrder);
    } catch (error) {
      throw error;
    }
  }
  async updateOrder(req, res, next) {
    try {
      const { orderId } = req.params;
      const updateOrder = await orderService.update(orderId, req.body, {new: true});
      res.send(updateOrder);
    } catch (error) {
      throw error;
    }
  }
  async removeOrder(req, res, next) {
    try {
      const { orderId } = req.params;
      const removeOrder = await orderService.remove(orderId);
      res.send(removeOrder);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new OrderController()

