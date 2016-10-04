const baseLoggerBuilder = require(path.join(process.cwd(), 'app', 'loggers', 'base-logger'));

describe.skip(chalk.magenta('Unit: BaseLogger'), () => {

  it('Should fail when no winston instance is specified on config object', (done) => {
    const configObject = {};
    expect(() => baseLoggerBuilder(configObject)).to.throw('Failed to create a new logger: No winston specified on its config object.');
    done();
  });

  it('Should return the new logger object with info and error functions', (done) => {
    const winstonMock = {
      info: sinon.stub(),
      error: sinon.stub()
    };
    const logger = baseLoggerBuilder({
      winston: winstonMock
    });

    const generatedLogger = logger();

    expect(generatedLogger).to.be.an('object');
    expect(generatedLogger.info).to.be.a('function');
    expect(generatedLogger.error).to.be.a('function');
    done();
  });

  it('Should call winston info function with default tag and specified message', (done) => {
    const winstonMock = {
      info: sinon.stub(),
      error: sinon.stub()
    };
    const config = { winston: winstonMock };
    const baseLogger = baseLoggerBuilder(config)();
    const expectedMessage = 'Whatever';
    const expectedTag = 'no-tag';

    baseLogger.info('Whatever');

    expect(winstonMock.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

  it('Should call winston info function with specified tag and message', (done) => {
    const winstonMock = {
      info: sinon.stub(),
      error: sinon.stub()
    };
    const config = { winston: winstonMock };
    const expectedMessage = 'Whatever';
    const expectedTag = 'tag';
    const baseLogger = baseLoggerBuilder(config)(expectedTag);

    baseLogger.info('Whatever');

    expect(winstonMock.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

  it('Should call winston info function with overridden default tag and message', (done) => {
    const winstonMock = {
      info: sinon.stub(),
      error: sinon.stub()
    };
    const expectedTag = 'tag-123';
    const config = { winston: winstonMock, defaultTag: expectedTag };
    const expectedMessage = 'Whatever';
    const baseLogger = baseLoggerBuilder(config)();

    baseLogger.info('Whatever');

    expect(winstonMock.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

  it('Should not call winston info function when no message is specified', (done) => {
    const winstonMock = {
      info: sinon.stub(),
      error: sinon.stub()
    };
    const config = { winston: winstonMock};
    const baseLogger = baseLoggerBuilder(config)();

    baseLogger.info();

    expect(winstonMock.info).to.not.have.been.called;
    done();

  });

  it('Should call tag formatter function specified on config', (done) => {
    const winstonMock = {
      info: sinon.stub(),
      error: sinon.stub()
    };
    const unexpectedTag = 'ABC';
    const expectedTag = '123';
    const expectedMessage = 'Whatever';
    const config = { winston: winstonMock, tagFormatter: (tag) => expectedTag};
    const baseLogger = baseLoggerBuilder(config)(unexpectedTag);

    baseLogger.info(expectedMessage);

    expect(winstonMock.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

  it('Should call tag formatter function specified on config', (done) => {
    const winstonMock = {
      info: sinon.stub(),
      error: sinon.stub()
    };
    const unexpectedMessage = 'ABC';
    const expectedMessage = '123';
    const expectedTag = 'Bla';
    const config = { winston: winstonMock, messageFormatter: (tag) => expectedMessage};
    const baseLogger = baseLoggerBuilder(config)(expectedTag);

    baseLogger.info(unexpectedMessage);

    expect(winstonMock.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

});
