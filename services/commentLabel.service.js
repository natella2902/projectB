const commentLabelModel = require("../models/index").commentLabel;

class CommentLabelService {
  async create(name, color, icon, projectId) {
    try {
      const newCommentLabel = await commentLabelModel.create(name, color, icon, projectId);
      return newCommentLabel;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const updateCommentLabel = await commentLabelModel.findByIdAndUpdate(id, data);
      return updateCommentLabel;
    } catch (error) {
      throw error;
    }
  }
  async getById(id) {
    try {
      const getCommentLabel = await commentLabelModel.findById(id)
      return getCommentLabel
    } catch (error) {
      throw error;
    }
  }
  async getByProjectId(id) {
    try {
      const getCommentLabelByProject = await commentLabelModel.find({projectId: id});
      return getCommentLabelByProject;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new CommentLabelService();
