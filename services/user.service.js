const userModel = require("../models/index").user;

class UserService {
  async create(email, password, name, userName) {
    try {
      const newUser = await userModel.create(email, password, name, userName);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
  async findById(id) {
    try {
      const findUser = await userModel.findById(id)
      return findUser
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updateUser = await userModel.findByIdAndUpdate(id, data)
      return updateUser
    } catch (error) {
      throw error;
    }
  }

  async changeEmail(userId, newPassword) {
    try {
      const changeUserEmail = await userModel.findByIdAndUpdate(userId, newPassword)
      return changeUserEmail
    } catch (error) {
      throw error;
    }
  }

  async changePassword(userId, newPassword) {
    try {
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new UserService();
