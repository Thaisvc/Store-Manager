const { expect } = require('chai');
const sinon = require('sinon');
const { productsModels } = require('../../../src/models/index');

const connection = require('../../../src/models/connection');

const { allProducts } = require('./mocks/products.model.mock');

describe('Teste de unidade da camada model', function () {
  it('Testa  se a rota /product busca todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productsModels.findAllProducts();
    expect(result).to.be.equal(allProducts)
})

})
