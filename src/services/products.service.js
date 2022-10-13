const productsModel = require('../models/products.models');

const findAll = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await productsModel.findProductById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

/* const newProduct = async (productName) => {
 /*  console.log(product, ' service');
  const productADD = await productsModel.addNewProduct(product);
  if (product) return { type: null, message: productADD };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  const newProductId = await productsModel.addNewProduct(productName);
  const newProducts = await productsModel.findProductById(newProductId);
  return { type: null, message: newProducts };
}; */

const addNewProduct = async (productName) => {
  const newProductId = await productsModel.insert(productName);
  const newProduct = await productsModel.findById(newProductId);
  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  addNewProduct,
};
