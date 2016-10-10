const defaultHeaderRemover = require('../../../app/middlewares/default-header-remover');

describe('Unit: Middleware: Default Header Remover', () => {

  it('Should remove default Express headers', done => {

    const request = {};
    const response = { removeHeader: sinon.stub() };
    const next = sinon.stub();

    defaultHeaderRemover(request, response, next);

    expect(response.removeHeader).to.have.been.calledWith('X-Powered-By');
    expect(response.removeHeader).to.have.been.calledWith('date');
    expect(response.removeHeader).to.have.been.calledWith('etag');
    expect(response.removeHeader).to.have.been.calledWith('content-length');
    expect(next).to.have.been.called;
    done();

  });

});
