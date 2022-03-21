const userService = require("../services/user.service");
class UserController {
  async createUser(req, res, next) {
    try {
      const { email, password, name, userName } = req.body;
      const newUser = userService.create(email, password, name, userName);
      res.send(newUser);
    } catch (error) {}
  }
  async getById(req, res, next) {
    try {
      const { userId } = req.params
      const findUser = await userService.findById(userId)
      res.send(findUser)
    } catch (error) {

    }
  }
  async updateUserData(req, res, next) {
    try {
      const { userId } = req.params
      const findUser = await userService.update(userId, req.body, {new: true})
      res.send(findUser)
    } catch (error) {

    }
  }
  async getCurrentUser(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async changeEmail(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async changePassword(req, res, next) {
    try {

    } catch (error) {

    }
  }
}

module.exports = new UserController()

