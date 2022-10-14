const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);
const { expect } = chai;

const productService = require("../../../src/services/products.service");
const productsController = require("../../../src/controllers/products.controller");
const { allProducts } = require('../models/mocks/products.model.mock');
const { productMock, newProductrMock } = require("./mocks/product.controller.mock");


describe("'Teste de unidade da camada controller ", function () {
  it("Testa se mostra mesangem de sucesso caso todos os produtos seja encotrado", async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "findAll")
      .resolves({ type: null, message: allProducts });

    await productsController.allProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });

  it("Testa se mostra mesangem de sucesso caso um produto seja cadastrado", async function () {
    const res = {};
    const req = {
      body: productMock,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'newProduct')
      .resolves({ type: null, message: newProductrMock });

    await productsController.insertNewProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductrMock);
  });

  afterEach(sinon.restore);

});
