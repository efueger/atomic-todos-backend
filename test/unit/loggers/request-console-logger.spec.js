const winston = require('winston');
const logger = require('../../../app/loggers/request-console-logger');

describe('Unit: Loggers: RequestConsoleLogger', () => {

  it('Should be a winston.Logger object', done => {
    expect(logger).to.be.an.instanceof(winston.Logger);
    done();
  });

  it('Should have a console transport', done => {
    expect(logger.transports).to.have.property('console');
    expect(logger.transports.console).to.have.property('name', 'console');
    done();
  });

});
