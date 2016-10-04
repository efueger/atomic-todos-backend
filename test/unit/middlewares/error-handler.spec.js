'use strict';

const errorHandler = require(path.join(process.cwd(), 'app', 'middlewares', 'error-handler'));

describe(chalk.magenta('Unit: Middleware: Error Handler'), () => {

  it('Should respond with 400 and a message according to the received error structure', (done) => {
    const request = {};
    const response = {status: sinon.stub(), json: sinon.stub()};
    response.status.returns(response);
    const error = {status: 400, body: {message: 'A message'} };

    errorHandler(error, request, response);

    expect(response.status).to.have.been.calledWith(error.status);
    expect(response.json).to.have.been.calledWith(error.body);
    done();
  });

  it('Should respond with 500 and a generic message when the received error object has no such information', (done) => {
    const request = {};
    const response = {status: sinon.stub(), json: sinon.stub()};
    response.status.returns(response);
    const error = {};

    errorHandler(error, request, response);

    expect(response.status).to.have.been.calledWith(500);
    expect(response.json).to.have.been.calledWith({message: 'Internal Generic Error'});
    done();
  });

});
