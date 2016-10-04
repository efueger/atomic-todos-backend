'use strict';

const contentTypeChecker = require(path.join(process.cwd(), 'app', 'middlewares', 'content-type-checker'));

describe(chalk.magenta('Unit: Middleware: Content Type Checker'), () => {

  it('Should call next when request has Content-Type equals to application/json', (done) => {

    const expectedContentType = 'application/json';

    const request = { headers: { 'content-type': expectedContentType } };
    const response = {};

    contentTypeChecker(request, response, done);

  });

  it('Should respond with 400 and an error message when Content-Type is absent from request headers', (done) => {

    const request = { headers: {} };
    const response = {};

    response['send'] = sinon.stub();
    response['status'] = sinon.stub().returns(response);

    contentTypeChecker(request, response);

    expect(response.status).to.have.been.calledWith(400);
    expect(response.send).to.have.been.calledWith('Content-Type header is not set for this request');
    done();

  });

  it('Should respond with 400 and an error message when Content-Type request header is different from application/json', (done) => {

    const request = { headers: {'content-type': 'whatever'} };
    const response = {};

    response['send'] = sinon.stub();
    response['status'] = sinon.stub().returns(response);

    contentTypeChecker(request, response);

    expect(response.status).to.have.been.calledWith(400);
    expect(response.send).to.have.been.calledWith('Request Content-Type header is invalid. It must be only application/json');
    done();

  });

  it('Should respond with 400 and an error message when Content-Type request header is null or undefined', (done) => {

    const request = { headers: {'content-type': undefined} };
    const response = {};

    response['send'] = sinon.stub();
    response['status'] = sinon.stub().returns(response);

    contentTypeChecker(request, response);

    expect(response.status).to.have.been.calledWith(400);
    expect(response.send).to.have.been.calledWith('Content-Type header is not set for this request');
    done();

  });

});
