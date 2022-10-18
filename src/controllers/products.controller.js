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

const insertNewProduct = async (req, res) => {
  const name = req.body;
  const { type, message } = await productsService.newProduct(name);
  // console.log(type);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

const ProductUpdate = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const newObj = { name, id };

  const { type, message } = await productsService.productUpdate(newObj); // RETORNO É = {TYPE, MENSSAGE} DESTRUTURADO VINDO DE productUpdate
  // console.log(retorno);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
  /* const retorno = await productsService.productUpdate(newObj); // RETORNO É = {TYPE, MENSSAGE} DESTRUTURADO VINDO DE productUpdate
  // console.log(retorno);
  if (retorno.type) return res.status(errorMap.mapError(retorno.type)).json(retorno.message);
  return res.status(200).json(retorno.message); RETORNA MENSSAGEM DE ERRO COMO STRING DANDO ERRO NO TESTE */
};
module.exports = {
  allProducts,
  getProduct,
  insertNewProduct,
  ProductUpdate,
};
