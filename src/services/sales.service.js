const SalesModel = require('../models/sale.model');

const list = async () => {
  const sale = await SalesModel.allSales();
  return { type: null, message: sale };
};

const findId = async (id) => {
  const saleId = await SalesModel.SelectId(id);
  if (saleId.length > 0) return { type: null, message: saleId };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };
};

/* const addSales = async (saleNew) => {
  // const newId = await SalesModel.addNewId();

  const selectSale = await SalesModel.saleLastId();

  const sales = saleNew.map((item) => ({ selectSale, ...item }));

 // const { insertId } = selectSale;
/*   const { productId, quantity } = saleNew;
  console.log(productId, quantity);

  const newSale = {
    insertId,
    productId,
    quantity,
  };
  const sale = await SalesModel.insert(sales);
  if (sale) return { type: null, message: sale };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };
}; */// TENTATIVA NAO PASSOU NO TESTE MAIS É BOA REQ6

const addSales = async (saleNew) => {
  console.log(saleNew);
  const selectSale = await SalesModel.saleLastId();
  const promises = saleNew.map((car) =>
    SalesModel.insert(selectSale, car.productId, car.quantity));
  Promise.all(promises);
  const message = { id: selectSale, itemsSold: saleNew };
  return { type: null, message };
};

module.exports = {
  list,
  findId,
  addSales,
};
