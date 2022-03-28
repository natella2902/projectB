const orderModel = require("../models/index").order;

class OrderService {
  async create(statusOrder, userId, essenceId, productId, price) {
    try {
      const newOrder = await orderModel.create(statusOrder, userId, essenceId, productId, price);
      return newOrder;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const updateOrder = await orderModel.findByIdAndUpdate(id, data);
      return updateOrder;
    } catch (error) {
      throw error;
    }
  }
  async remove(id) {
    try {
      const removeOrder = await orderModel.findById(id);
      if (removeOrder._id === id) {
        await removeOrder.remove();
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new OrderService();
