const conn = require('./connection');

const findAllProducts = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products');
  return result;
};

const findProductById = async (productId) => {
  const [[result]] = await conn.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return result;
};

const addNewProduct = async (neuProduct) => {
 /*   console.log(neuProduct, 'models');
  const columns = Object.keys(neuProduct) // ADD AS COLUNAS DE FORMA DINAMICA
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(neuProduct) // ADD OS PLACEHOLDERS  DE FORMA DINAMICA
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await conn.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(neuProduct)],
  ); */
  // console.log(result);
  const [{ insertId }] = await conn.execute( // insertId VEM DO ARRAY DE RESULT É O NOVO ID CRIADO APARTIR DO INSERT
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [neuProduct],
  );
  return insertId;
};

module.exports = {
  findAllProducts,
  findProductById,
  addNewProduct,
};
