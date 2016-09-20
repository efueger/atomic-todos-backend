'use strict';

const path = require('path');
const chalk = require('chalk');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonAsPromised = require('sinon-as-promised');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const CreateAction = require(path.join(process.cwd(), 'actions', 'grocery-list', 'create'));
const RootAction = require(path.join(process.cwd(), 'actions', 'grocery-list', 'root'));

describe(chalk.magenta('Unit: Grocery List Route Actions'), () => {

  it('ROOT should return a welcome message', (done) => {
    const rootAction = new RootAction();
    const request = {};
    const response = {
      json: sinon.spy()
    };

    rootAction.apply(request, response, () => {
      expect(response.json).to.have.been.calledWith({hello: 'Grocery lists'});
      done();
    });

  });

  it('CREATE should save a new groceryStoreList', (done) => {

    const model = {save: sinon.stub()};
    model.save.resolves();
    const createAction = new CreateAction(model);
    const request = {};
    const response = {sendStatus: sinon.stub()};

    createAction.apply(request, response, () => {
      expect(model.save).to.have.been.calledWith({});
      expect(response.sendStatus).to.have.been.calledWith(201);
      done();
    });

  });

});
