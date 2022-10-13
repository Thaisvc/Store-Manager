const productsService = require('../services/products.service');
const errorMap = require('../helpers/erroMap');

const allProducts = async (_req, res) => {
  const { message } = await productsService.findAll();
  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

/* const insertNewProduct = async (req, res) => {
 /*  const newProd = req.body;
  const { type, message } = await productsService.newProduct(newProd);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
  console.log(req.body);
  const { name } = req.body;
  const { message } = await productsService.newProduct(name);
  res.status(201).json(message);
}; */

const addNewProduct = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const { message } = await productsService.addNewProduct(name);
  res.status(201).json(message);
};
module.exports = {
  allProducts,
  getProduct,
  addNewProduct,
};
