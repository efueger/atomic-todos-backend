const statusAction = require('../../../app/actions/status');

describe('Unit: Action: Status', () => {

  it('Should respond with 200 and the expected response body', done => {

    const request = {};
    const response = {json: sinon.stub()};

    statusAction(request, response);

    expect(response.json).to.have.been.calledWith({ ok: true });
    done();
  });

});
