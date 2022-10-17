const productsModel = require('../models/products.models');
const { validateBody, validateBodyUpdate } = require('./validation/productValid');

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

const productUpdate = async (Update) => {
  const add = await validateBodyUpdate(Update);
  if (add.type) return add;

  const ProdEdit = await productsModel.findProductById(Update.id);
  if (ProdEdit) {
    await productsModel.update(Update);
    return { type: null, message: Update };
  }
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
  newProduct,
  productUpdate,

};
