const { expect } = require('chai');
const sinon = require('sinon');

const { productsModels } = require('../../../src/models/index');
const { productService } = require('../../../src/services/index');
const { allProducts } = require('../models/mocks/products.model.mock');


describe("'Teste de unidade da camada service", function () {
    it("Verifica se a rota /product retorna mensagem de sucesso", async function () {
      sinon.stub(productsModels, "findAllProducts").resolves(allProducts);

      const result = await productService.findAll();
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProducts);
    });

});
