const projectService = require("../services/project.service");
class projectController {
  async createProject(req, res, next) {
    try {
      const { name, description, tariffId, owner, userIds, statusProject } = req.body;
      const newProject = projectService.create(name, description, tariffId, owner, userIds, statusProject);
      res.send(newProject);
    } catch (error) {
      throw error;
    }
  }
  async getProjectById(req, res, next) {
    try {
      const { projectId } = req.params
      const findProject = await projectService.findById(projectId)
      res.send(findProject)
    } catch (error) {
      throw error;
    }
  }
  async updateProject(req, res, next) {
    try {
      const { projectId } = req.params
      const updateProject = await projectService.update(projectId, req.body, {new: true})
      res.send(updateProject)
    } catch (error) {
      throw error;
    }
  }
  async archiveProject(req, res, next) {
    try {
      const { projectId } = req.params
      const archiveProject = await projectService.archive(projectId)
      res.send(archiveProject)
    } catch (error) {
      throw error;
    }
  }
  async getProjectByUserAccess(req, res, next) {
    try {
      const { userId } = req.params
      const ProjectsByUserAccess = await projectService.getByUserAccess(userId)
      res.send(ProjectsByUserAccess)
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new projectController()

