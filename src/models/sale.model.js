const camelize = require('camelize');
const conn = require('./connection');

const allSales = async () => {
  const [data] = await conn.execute(
    ` SELECT sale_p.sale_id AS saleId , sale_p.product_id AS productId, sale_p.quantity, sale.date
  FROM StoreManager.sales_products AS sale_p
  INNER JOIN StoreManager.sales AS sale
  ON sale_p.sale_id  = sale.id
  ORDER BY  sale_p.sale_id  , sale_p.product_id
   `,
  );
  return data;
};

const SelectId = async (saleID) => {
  const [result] = await conn.execute(
    ` SELECT  sale_p.product_id , sale_p.quantity, sale.date
  FROM StoreManager.sales_products AS sale_p
  INNER JOIN StoreManager.sales AS sale
  ON sale_p.sale_id  = sale.id
  WHERE sale_id  = (?) ORDER BY  sale_id  , product_id
   `,
    [saleID],
  );
  return camelize(result);
};

const saleLastId = async () => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO  StoreManager.sales(date) VALUES(now())',
  );

  return insertId;
};

/* const insert = async (SaleNew) => {
   console.log(SaleNew);
  const [result] = await conn.execute(
    ' INSERT INTO  StoreManager.sales_products(sale_id, product_id, quantity) VALUES (?,?,?)',
    [SaleNew.insertId, SaleNew.productId, SaleNew.quantity],
  );
  return result;
}; */// TENTATIVA NAO PASSOU NO TESTE MAIS É ACHO Q SO FALTAVA UM MAP PARA PERCORRER O ARRAY BOA REQ6

const insert = async (id, productId, quantity) => {
   console.log(id, productId, quantity);
  const [{ insertId }] = await conn.execute(
    'INSERT INTO  StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [id, productId, quantity],
  );

  return insertId;
};

module.exports = {
  allSales,
  SelectId,
  saleLastId,
  insert,
};
