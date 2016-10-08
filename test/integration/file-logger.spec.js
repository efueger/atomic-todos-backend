const loggers = require('../../app/loggers');
const winston = require('winston');

describe(chalk.magenta('Integration: File Logger'), () => {


  const loggerTag = 'logger';
  const logger = loggers.fileLogger(loggerTag);

  it('Should be a BaseLogger object', done => {

    expect(logger).to.be.an.instanceof(loggers.BaseLogger);
    done();

  });

  it('Should contain a winston Logger object', done => {

    expect(logger.winston).to.be.an.instanceof(winston.Logger);
    done();

  });

  it('Should contain a transport to info file', done => {

    expect(logger.winston.transports).to.have.property('info-file');
    expect(logger.winston.transports['info-file']).to.have.property('filename', 'info.log');
    expect(logger.winston.transports['info-file']).to.have.property('level', 'info');
    done();

  });

  it('Should contain a transport to error file', done => {

    expect(logger.winston.transports).to.have.property('error-file');
    expect(logger.winston.transports['error-file']).to.have.property('filename', 'error.log');
    expect(logger.winston.transports['error-file']).to.have.property('level', 'error');
    done();

  });

});
