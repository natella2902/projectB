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
  async archive(id) {
    try {
      const archiveProduct = await productModel.findByIdAndUpdate(id)
      return archiveProduct
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();
