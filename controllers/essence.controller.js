const essenceService = require("../services/essence.service");
class EssenceController {
  async createEssence(req, res, next) {
    try {
      const { productId, currency, price } = req.body;
      const newEssence = essenceService.create(productId, currency, price);
      res.send(newEssence);
    } catch (error) {
      throw error;
    }
  }
  async updateEssence(req, res, next) {
    try {
      const { essenceId } = req.params;
      const updateProject = await essenceService.update(essenceId, req.body, {new: true});
      res.send(updateProject);
    } catch (error) {
      throw error;
    }
  }
  async archiveEssence(req, res, next) {
    try {
      const { essenceId } = req.params;
      const archiveEssence = await essenceService.archive(essenceId);
      res.send(archiveEssence);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new EssenceController()

