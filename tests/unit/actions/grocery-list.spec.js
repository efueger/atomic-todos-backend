'use strict';

const path = require('path');
const chalk = require('chalk');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const requireAction = (name, model, validator) => require(path.join(process.cwd(), 'actions', 'grocery-list', name))(model, validator);

describe(chalk.magenta('Unit: Grocery List Route Actions'), () => {

  it('ROOT should return a welcome message', (done) => {
    const rootAction = requireAction('root');
    const request = {};
    const jsonResponseSpy = sinon.spy();
    const response = {
      json: jsonResponseSpy
    };

    rootAction(request, response);

    expect(response.json).to.have.been.calledWith({hello: 'Grocery lists'});
    done();

  });

  it.skip('CREATE should save a new groceryStoreList', (done) => {

  });

});
