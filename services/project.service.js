const projectModel = require("../models/index").project;

class ProjectService {
  async create(name, description, tariffId, owner, userIds, statusProject) {
    try {
      const newProject = await projectModel.create(name, description, tariffId, owner, userIds, statusProject);
      return newProject;
    } catch (error) {
      throw error;
    }
  }
  async findById(id) {
    try {
      const findProject = await projectModel.findById(id)
      return findProject
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const updateProject = await projectModel.findByIdAndUpdate(id, data);
      return updateProject
    } catch (error) {
      throw error;
    }
  }
  async archive(id) {
    try {

    } catch (error) {
      throw error;
    }
  }
  async getByUserAccess(id) {
    try {

    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProjectService();
