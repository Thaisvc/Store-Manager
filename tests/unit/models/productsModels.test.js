const { expect } = require('chai');
const sinon = require('sinon');
const  productsModels = require('../../../src/models/products.models');

const connection = require('../../../src/models/connection');

const { allProducts, newProduct } = require('./mocks/products.model.mock');

describe('Teste de unidade da camada model', function () {
  it('Testa  se a rota /product busca todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productsModels.findAllProducts();
    expect(result).to.be.equal(allProducts)
})

  it('Testa  se a rota /product a funçao de inserir dados no BD', async function () {
    sinon.stub(connection, "execute").resolves([[allProducts[0]]]);

    const result = await productsModels.findProductById(1);
    expect(result).to.deep.equal(allProducts[0]);
  })
  afterEach(sinon.restore);
})
