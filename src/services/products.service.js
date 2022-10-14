const productsModel = require('../models/products.models');
const { validateBody } = require('./validation/productValid');

const findAll = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await productsModel.findProductById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const newProduct = async (productName) => {
  const add = await validateBody(productName);
  if (add.type) return add;

  const productADD = await productsModel.addNewProduct(productName);
  const newProd = await productsModel.findProductById(productADD);
  return { type: null, message: newProd };
};

module.exports = {
  findAll,
  findById,
  newProduct,

};
