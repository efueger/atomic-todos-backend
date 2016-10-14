'use strict';

const Action = require('../../../app/actions/base-action');

describe('Unit: Action: Base Action', () => {

  let app = {};
  const METHOD = 'method';

  app[METHOD] = sinon.stub();
  const handleStub = function () {};
  const handleBindStub = sinon.stub();
  const preStub = function () {};
  const preBindStub = sinon.stub();

  handleStub.bind = sinon.stub().returns(handleBindStub);
  preStub.bind = sinon.stub().returns(preBindStub);

  beforeEach( done => {
    app.method.reset();
    handleStub.bind.reset();
    handleBindStub.reset();
    done();
  });

  it('Should register the handle method in the app', done => {

    const expectedEndpoint = 'endpoint';
    const action = new Action(app);
    action.handle = handleStub;

    action.register(METHOD, expectedEndpoint);

    expect(app[METHOD]).to.have.been.calledWith(expectedEndpoint, handleBindStub);
    expect(action.handle.bind).to.have.been.calledWith(action);
    done();
  });

  it('Should register the pre method in the app', done => {

    const expectedEndpoint = 'endpoint';
    const action = new Action(app);
    action.handle = handleStub;
    action.pre = preStub;

    action.register(METHOD, expectedEndpoint);

    expect(app[METHOD]).to.have.been.calledWith(expectedEndpoint, preBindStub);
    expect(action.pre.bind).to.have.been.calledWith(action);

    done();
  });

  it('Should throw an error when no handle is present', done => {
    const action = new Action(app);

    expect(() => action.register()).to.throw(`handle(req, res, next) not implemented on ${ action.constructor.name }`);
    done();
  });

  it('Should throw an error when no http method is received on register call', done => {
    const action = new Action(app);
    action.handle = handleStub;

    expect(() => action.register(null)).to.throw(`No HTTP method specified for ${ action.constructor.name }`);
    done();
  });

  it('Should throw an error when no endpoint is received on register call', done => {
    const action = new Action(app);
    action.handle = handleStub;
    expect(() => action.register(METHOD, null)).to.throw(`No endpoint specified for ${ action.constructor.name }`);
    done();
  });
});
