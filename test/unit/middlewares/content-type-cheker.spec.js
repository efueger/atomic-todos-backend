'use strict';

const contentTypeChecker = require('../../../app/middlewares/content-type-checker');

describe('Unit: Middleware: Content Type Checker', () => {

  it('Should call next when request has Content-Type equals to application/json', done => {

    const expectedContentType = 'application/json';

    const request = { method: 'POST', headers: { 'content-type': expectedContentType } };
    const response = {};

    contentTypeChecker(request, response, done);

  });

  it('Should ignore the absence of Content-Type on GET requests', done => {

    const request = { method: 'GET' };
    const response = {};

    contentTypeChecker(request, response, done);

  });

  it('Should respond with 400 and an error message when Content-Type is absent from request headers', done => {

    const request = { method: 'POST', headers: {} };
    const response = {};

    contentTypeChecker(request, response, error => {
      expect(error.status).to.equal(400);
      expect(error.cause.message).to.equal('Content-Type header is not set for this request');
      expect(error.body.message).to.equal('Content-Type header is not set for this request');
      done();
    });

  });

  it('Should respond with 400 and an error message when Content-Type request header is different from application/json', done => {

    const request = { method: 'POST', headers: {'content-type': 'whatever'} };
    const response = {};

    contentTypeChecker(request, response, error => {

      expect(error.status).to.equal(400);
      expect(error.cause.message).to.equal('Request Content-Type header is invalid. It must be only application/json');
      expect(error.body.message).to.equal('Request Content-Type header is invalid. It must be only application/json');
      done();

    });
  });

  it('Should respond with 400 and an error message when Content-Type request header is null or undefined', done => {

    const request = { method:'POST', headers: {'content-type': undefined} };
    const response = {};

    contentTypeChecker(request, response, error => {
      expect(error.status).to.equal(400);
      expect(error.cause.message).to.equal('Content-Type header is not set for this request');
      expect(error.body.message).to.equal('Content-Type header is not set for this request');
      done();
    });

  });

});
