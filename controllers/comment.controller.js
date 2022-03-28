const commentService = require("../services/comment.service");
class CommentController {
  async createComment(req, res, next) {
    try {
      const { userId, clientId, files, assignedUsers, Labels, childrenComments, isDeleted } = req.body;
      const newComment = commentService.create(userId, clientId, files, assignedUsers, Labels, childrenComments, isDeleted);
      res.send(newComment);
    } catch (error) {
      throw error;
    }
  }
  async updateComment(req, res, next) {
    try {
      const { commentId } = req.params;
      const updateComment = await commentService.update(commentId, req.body, {new: true});
      res.send(updateComment);
    } catch (error) {
      throw error;
    }
  }
  async removeComment(req, res, next) {
    try {
      const { commentId } = req.params;
      const removeComment = await commentService.remove(commentId);
      res.send(removeComment);
    } catch (error) {
      throw error;
    }
  }
  async addReplyComment(req, res, next) {
    try {
      const { commentId } = req.params;
      const addReplayComment = await commentService.addReply(commentId, req.body, {new: true});
      res.send(addReplayComment);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CommentController()

