const BaseLogger = require(path.join(process.cwd(), 'app', 'loggers', 'base-logger'));

describe(chalk.magenta('Unit: BaseLogger'), () => {

  const winston = { info: sinon.stub(), error: sinon.stub() };
  const mockConfig = (tagText, formattedTagText, formattedMessageText) => {
    return {
      winston,
      tag: { text: tagText },
      tagFormatter: formattedTagText ? () => formattedTagText : undefined,
      messageFormatter: formattedMessageText ? () => formattedMessageText : undefined
    };
  };

  beforeEach(done => {
    winston.info.reset();
    winston.error.reset();
    done();
  });

  it('Should fail when no config object is specified', done => {
    expect(() => new BaseLogger()).to.throw('Failed to create a new logger: No config object specified.');
    done();
  });

  it('Should fail when no winston instance is specified on config object', done => {
    expect(() => new BaseLogger({})).to.throw('Failed to create a new logger: No winston specified on its config object.');
    done();
  });

  it('Should fail when no tag is specified on config object', done => {
    expect(() => new BaseLogger({ winston })).to.throw('Failed to create a new logger: No tag specified on its config object.');
    done();
  });

  it('Should create a BaseLogger with tag and winston', done => {
    const expectedTag = { text: 'something' };
    const config = { winston, tag: expectedTag };

    const baseLogger = new BaseLogger(config);

    expect(baseLogger.winston).to.deep.equal(winston);
    expect(baseLogger.tag).to.deep.equal(expectedTag);
    done();
  });

  it('Should call winston info function with specified tag and message', done => {

    const expectedTagText = 'tag';
    const expectedMessage = 'Whatever';
    const baseLogger = new BaseLogger(mockConfig(expectedTagText));

    baseLogger.info('Whatever');

    expect(winston.info).to.have.been.calledWith(expectedTagText, expectedMessage);
    done();

  });

  it('Should call winston error function with specified tag and message', done => {

    const expectedMessage = 'Whatever';
    const expectedTagText = 'tag';

    const baseLogger = new BaseLogger(mockConfig(expectedTagText));

    baseLogger.error('Whatever');

    expect(winston.error).to.have.been.calledWith(expectedTagText, expectedMessage);
    done();
  });

  it('Should not call winston info or error functions when no message is specified', done => {

    const baseLogger = new BaseLogger(mockConfig('whatever'));

    baseLogger.info();
    baseLogger.error();

    expect(winston.info).to.not.have.been.called;
    expect(winston.error).to.not.have.been.called;
    done();

  });

  it('Should call tag formatter function specified on config', done => {

    const unexpectedTag = 'ABC';
    const expectedTag = '123';
    const expectedMessage = 'Whatever';
    const baseLogger = new BaseLogger(mockConfig(unexpectedTag, expectedTag));

    baseLogger.info(expectedMessage);

    expect(winston.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

  it('Should call message formatter function specified on config', done => {
    const unexpectedMessage = 'ABC';
    const expectedMessage = '123';
    const expectedTag = 'Bla';

    const baseLogger = new BaseLogger(mockConfig(expectedTag, null, expectedMessage));

    baseLogger.info(unexpectedMessage);

    expect(winston.info).to.have.been.calledWith(expectedTag, expectedMessage);
    done();

  });

});
