'use strict';

const validator = require('../../../app/validators/grocery-list');

describe('Unit: Validators: GroceryListValidator', () => {

  let request = {};
  let response = {};

  it('Should return a badRequest error with empty request body', done => {

    request.body = null;
    const expectedErrorMessage = 'Request body is empty';

    validator.create(request, response, error => {
      expect(error.cause.constructor).to.deep.equal(Error);
      expect(error.body.message).to.equal(expectedErrorMessage);
      done();
    });

  });

  it('Should return an error with a request body that is not an array', done => {

    const expectedErrorMessage = 'Request body is not an array';
    request.body = 'whatever';

    validator.create(request, response, error => {
      expect(error.cause.constructor).to.deep.equal(Error);
      expect(error.body.message).to.equal(expectedErrorMessage);
      done();
    });

  });

  it('Should return an error with a request body as an empty array', done => {

    const expectedErrorMessage = 'There are no items on request body';
    request.body = [];

    validator.create(request, response, error => {
      expect(error.cause.constructor).to.deep.equal(Error);
      expect(error.body.message).to.equal(expectedErrorMessage);
      done();
    });

  });

  it('Should return null when request body is valid', done => {

    request.body = [ { description: 'Something' } ];

    validator.create(request, response, error => {
      expect(error).to.not.exist;
      done();
    });

  });

});
