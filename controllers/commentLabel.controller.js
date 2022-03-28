const commentLabelService = require("../services/commentLabel.service");
class CommentLabelController {
  async createCommentLabel(req, res, next) {
    try {
      const { name, color, icon, projectId } = req.body;
      const newComment = commentLabelService.create(name, color, icon, projectId);
      res.send(newComment);
    } catch (error) {
      throw error;
    }
  }
  async updateCommentLabel(req, res, next) {
    try {
      const { commentLabelId } = req.params;
      const updateComment = await commentLabelService.update(commentLabelId, req.body, {new: true});
      res.send(updateComment);
    } catch (error) {
      throw error;
    }
  }
  async getCommentLabel(req, res, next) {
    try {
      const { commentLabelId } = req.params;
      const getCommentById = await commentLabelService.getById(commentLabelId);
      res.send(getCommentById);
    } catch (error) {
      throw error;
    }
  }
  async getCommentLabelByProjectId(req, res, next) {
    try {
      const { projectId } = req.params;
      const getCommentById = await commentLabelService.getByProjectId(projectId);
      res.send(getCommentById);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CommentLabelController()

