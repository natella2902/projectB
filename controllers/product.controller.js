const productService = require("../services/product.service");
class productController {
  async createProduct(req, res, next) {
    try {
      const { Project, name, description, image, Products, type, isArchive } = req.body;
      const newProduct = productService.create(Project, name, description, image, Products, type, isArchive);
      res.send(newProduct);
    } catch (error) {
      throw error;
    }
  }
  async archiveProduct(req, res, next) {
    try {
      const { productId } = req.params
      const archiveProduct = await productService.archive(productId, { isArchive: true },  {new: true})
      res.send(archiveProduct)
    } catch (error) {
      throw error;
    }
  }
  async updateProduct(req, res, next) {
    try {
      const { productId } = req.params
      const updateProduct = await productService.update(productId, req.body, {new: true})
      res.send(updateProduct)
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new productController()

