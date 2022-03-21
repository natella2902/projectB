const projectService = require("../services/project.service");
class projectController {
  async createProject(req, res, next) {
    try {
      const { name, description, tariffId, owner, userIds, statusProject } = req.body;
      const newProject = projectService.create(name, description, tariffId, owner, userIds, statusProject);
      res.send(newProject);
    } catch (error) {}
  }
  async getProjectById(req, res, next) {
    try {
      const { projectId } = req.params
      const findProject = await projectService.findById(projectId)
      res.send(findProject)
    } catch (error) {

    }
  }
  async updateProject(req, res, next) {
    try {
      const { projectId } = req.params
      const updateProject = await projectService.update(projectId, req.body, {new: true})
      res.send(updateProject)
    } catch (error) {

    }
  }
  async archiveProject(req, res, next) {
    try {

    } catch (error) {

    }
  }
  async getProjectByUserAccess(req, res, next) {
    try {

    } catch (error) {

    }
  }
}

module.exports = new projectController()

