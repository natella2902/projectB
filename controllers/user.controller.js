const userService = require("../services/user.service");
class UserController {
  async createUser(req, res, next) {
    try {
      const { email, password, name, userName } = req.body;
      const newUser = userService.create(email, password, name, userName);
      res.send(newUser);
    } catch (error) {
      throw error;
    }
  }
  async getById(req, res, next) {
    try {
      const { userId } = req.params
      const findUser = await userService.findById(userId)
      res.send(findUser)
    } catch (error) {
      throw error;
    }
  }
  async updateUserData(req, res, next) {
    try {
      const { userId } = req.params
      const findUser = await userService.update(userId, req.body, {new: true})
      res.send(findUser)
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser(req, res, next) {
    try {

    } catch (error) {
      throw error;
    }
  }
  async changeEmail(req, res, next) {
    try {

    } catch (error) {
      throw error;
    }
  }
  async changePassword(req, res, next) {
    try {

    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserController()

