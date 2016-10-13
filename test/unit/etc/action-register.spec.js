'use strict';

const register = require('../../../app/etc/action-register');

describe('Unit: Etc: Action Register', () => {
  const expectedApp = {};
  const expectedMethod = 'get';
  const expectedEndpoint = '/some-endpoint';

  it('Should call action constructor passing app and register', done => {
    const action = { Constructor: ActionMock, method: expectedMethod, endpoint: expectedEndpoint };
    const actionList = [action];

    register.registerAll(expectedApp, actionList);

    done();

  });


  class ActionMock {
    constructor(app) {
      expect(app).to.deep.equal(expectedApp);
    }

    register(method, endpoint) {
      expect(method).to.equal(expectedMethod);
      expect(endpoint).to.equal(expectedEndpoint);
    }
  }

});
