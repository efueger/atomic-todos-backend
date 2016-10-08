'use strict';

const notFoundErrorHandler = require('../../../app/middlewares/not-found-handler');

describe('Unit: Middleware: Not Found Handler', () => {

  it('Should respond with 404', done => {

    const request = {};
    const response = {sendStatus: sinon.stub()};

    notFoundErrorHandler(request, response);

    expect(response.sendStatus).to.have.been.calledWith(404);
    done();

  });

});
