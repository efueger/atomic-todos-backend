const baseLoggerBuilder = require(path.join(process.cwd(), 'app', 'loggers', 'base-logger'));

describe(chalk.magenta('Unit: BaseLogger'), () => {

  const winston = {
    info: sinon.stub(),
    error: sinon.stub()
  };

  beforeEach(done => {
    winston.info.reset();
    winston.error.reset();
    done();
  });

  it('Should fail when no winston instance is specified on config object', done => {
    const configObject = {};
    expect(() => baseLoggerBuilder(configObject)).to.throw('Failed to create a new logger: No winston specified on its config object.');
    done();
  });

  it('Should return the new logger object with info and error functions', done => {
    const logger = baseLoggerBuilder({ winston });

    const generatedLogger = logger({});

    expect(generatedLogger).to.be.an('object');
    expect(generatedLogger.info).to.be.a('function');
    expect(generatedLogger.error).to.be.a('function');
    done();
  });

  it('Should throw an error when no tag is specified on logger creation', done => {

    const config = { winston };

    expect(() => baseLoggerBuilder(config)()).to.throw('Failed to create a new logger: No tag specified.');
    done();

  });

  it('Should call winston info function with specified tag and message', done => {

    const config = { winston };
    const expectedMessage = 'Whatever';
    const expectedTag = 'tag';
    const baseLogger = baseLoggerBuilder(config)(expectedTag);

    baseLogger.info('Whatever');

    expect(winston.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

  it('Should not call winston info function when no message is specified', done => {

    const config = { winston };
    const baseLogger = baseLoggerBuilder(config)({});

    baseLogger.info();

    expect(winston.info).to.not.have.been.called;
    done();

  });

  it('Should call tag formatter function specified on config', done => {
    const unexpectedTag = 'ABC';
    const expectedTag = '123';
    const expectedMessage = 'Whatever';
    const config = { winston , tagFormatter: () => expectedTag};
    const baseLogger = baseLoggerBuilder(config)(unexpectedTag);

    baseLogger.info(expectedMessage);

    expect(winston.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

  it('Should call tag formatter function specified on config', done => {
    const unexpectedMessage = 'ABC';
    const expectedMessage = '123';
    const expectedTag = 'Bla';
    const config = { winston, messageFormatter: () => expectedMessage};
    const baseLogger = baseLoggerBuilder(config)(expectedTag);

    baseLogger.info(unexpectedMessage);

    expect(winston.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

});
