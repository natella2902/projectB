const productModel = require("../models/index").project;

class ProductService {
  async create(Project, name, description, image, Products, type, isArchive) {
    try {
      const newProduct = await productModel.create(Project, name, description, image, Products, type, isArchive);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const updateProduct = await productModel.findByIdAndUpdate(id, data);
      return updateProduct
    } catch (error) {
      throw error;
    }
  }
  async archive(id, data) {
    try {
      const archiveProject = await productModel.findByIdAndUpdate(id, data)
      return archiveProject
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();
