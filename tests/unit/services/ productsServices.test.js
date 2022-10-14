const { expect } = require('chai');
const sinon = require('sinon');

const  productsModels  = require('../../../src/models/products.models');
const  productService  = require('../../../src/services/products.service');
const { allProducts, newProduct } = require('../models/mocks/products.model.mock');
const { validProduct } = require('../services/mocks/service.product.mock');


describe("'Teste de unidade da camada service", function () {
    it("Verifica se a rota /product retorna mensagem de sucesso", async function () {
      sinon.stub(productsModels, "findAllProducts").resolves(allProducts);

      const result = await productService.findAll();
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProducts);
    });

  it("Verifica se a rota /product retorna mensagem de sucesso ao cadastra novo produto", async function () {
    sinon.stub(productsModels, "addNewProduct").resolves([{ insertId: 1 }]);
    sinon.stub(productsModels, "findProductById").resolves(newProduct);

    const result = await productService.newProduct(validProduct);

    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(newProduct
    );
  });
  afterEach(sinon.restore);

});
