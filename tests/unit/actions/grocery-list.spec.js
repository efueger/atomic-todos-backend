'use strict';

const path = require('path');
const app = require(path.join(process.cwd(), 'app'));
const chalk = require('chalk');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const chaiSpies = require('chai-spies');

chai.use(chaiSpies);

const rootAction = require(path.join(process.cwd(), 'actions', 'grocery-list', 'root'))();
const createAction = require(path.join(process.cwd(), 'actions', 'grocery-list', 'create'))();

describe(chalk.magenta('Unit: Grocery List Route Actions'), () => {

  it('ROOT should return a welcome message', (done) => {

    const request = {};
    const jsonResponseSpy = chai.spy();
    const response = {
      json: jsonResponseSpy
    };

    rootAction(request, response);

    expect(response.json).to.have.been.called.with({hello: 'Grocery lists'});
    done();

  });

  it('CREATE should return a welcome message', (done) => {

    const request = {};
    const jsonResponseSpy = chai.spy();
    const response = {
      json: jsonResponseSpy
    };

    createAction(request, response);

    expect(response.json).to.have.been.called.with({postResponse: 'Hello'});
    done();

  });

});
