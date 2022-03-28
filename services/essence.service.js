const essenceModel = require("../models/index").essence;

class EssenceService {
  async create(productId, price, currency) {
    try {
      const newEssence = await essenceModel.create(productId, price, currency);
      return newEssence;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const updateEssence = await essenceModel.findByIdAndUpdate(id, data);
      return updateEssence;
    } catch (error) {
      throw error;
    }
  }
  async archive(id) {
    try {
      const archiveEssence = await essenceModel.findByIdAndUpdate(id)
      return archiveEssence;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = new EssenceService();
