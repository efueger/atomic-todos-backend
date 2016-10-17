const winston = require('winston');
const logger = require('../../../app/loggers/request-file-logger');

describe('Unit: Loggers: RequestFileLogger', () => {

  it('Should be a winston.Logger object', done => {
    expect(logger).to.be.an.instanceof(winston.Logger);
    done();
  });

  it('Should have a file transport to request infos', done => {
    expect(logger.transports).to.have.property('requestInfoFile');
    expect(logger.transports.requestInfoFile).to.have.property('name', 'requestInfoFile');
    expect(logger.transports.requestInfoFile).to.have.property('filename', 'requests.log');
    expect(logger.transports.requestInfoFile).to.have.property('level', 'info');
    expect(logger.transports.requestInfoFile).to.have.property('colorize', false);
    done();
  });

  it('Should have a file transport to request errors', done => {
    expect(logger.transports).to.have.property('requestErrorFile');
    expect(logger.transports.requestErrorFile).to.have.property('name', 'requestErrorFile');
    expect(logger.transports.requestErrorFile).to.have.property('filename', 'request-errors.log');
    expect(logger.transports.requestErrorFile).to.have.property('level', 'error');
    expect(logger.transports.requestErrorFile).to.have.property('colorize', false);
    done();
  });

});
