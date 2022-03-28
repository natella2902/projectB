const {order: orderModel} = require("../models");
const commentModel = require("../models/index").comment;

class CommentService {
  async create(userId, clientId, files, assignedUsers, Labels, childrenComments, isDeleted) {
    try {
      const newComment = await commentModel.create(userId, clientId, files, assignedUsers, Labels, childrenComments, isDeleted);
      return newComment;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const updateComment = await commentModel.findByIdAndUpdate(id, data);
      return updateComment;
    } catch (error) {
      throw error;
    }
  }
  async remove(id) {
    try {
      const removeComment = await commentModel.findById(id)
      if (removeComment._id === id) {
        await removeComment.remove();
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
  async addReply(id, data) {
    try {
      const addReplayComment = await commentModel.findByIdAndUpdate(id, data);
      return addReplayComment;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new CommentService();
