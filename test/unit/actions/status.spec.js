const StatusAction = require('../../../app/actions/status');

describe('Unit: Action: Status', () => {

  it('Should respond with 200 and the expected response body', done => {

    const request = {};
    const response = {json: sinon.stub()};
    const statusAction = new StatusAction({});

    statusAction.handle(request, response);

    expect(response.json).to.have.been.calledWith({ ok: true });
    done();
  });

});
