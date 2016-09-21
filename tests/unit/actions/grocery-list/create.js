
'use strict';

const path = require('path');
const chalk = require('chalk');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonAsPromised = require('sinon-as-promised');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const createAction = require(path.join(process.cwd(), 'actions', 'grocery-list', 'create'));


describe(chalk.magenta('Unit: Action: grocery-list.create'), () => {

  it('Should save a new groceryStoreList', (done) => {

    const model = {save: sinon.stub()};

    model.save.resolves({});

    const request = {body:[]};
    const response = {sendStatus: sinon.stub()};
    const expectedGroceryList = {
      date: new Date(),
      finished: false,
      items: request.body
    }

    createAction.call({GroceryStoreList: model}, request, response, () => {
      expect(model.save).to.have.been.calledWith(expectedGroceryList);
      expect(response.sendStatus).to.have.been.calledWith(201);
      done();
    });

  });
});
