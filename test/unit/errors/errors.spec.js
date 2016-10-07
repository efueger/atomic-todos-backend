const errors = require(path.join(process.cwd(), 'app', 'etc', 'errors'));

describe(chalk.magenta('Unit: Errors'), () => {

  it('Should return a bad request error on badRequest call', done => {

    const generatedError = errors.badRequest();

    expect(generatedError.status).to.equal(400);
    expect(generatedError.body.id).to.equal('BadRequest');
    expect(generatedError.body.cause.message).to.equal('No Cause');
    done();
  });

  it('Should return a bad request error with a cause on badRequest call', done => {
    const expectedCause = new Error('I am expected to be the cause');

    const generatedError = errors.badRequest(expectedCause);

    expect(generatedError.status).to.equal(400);
    expect(generatedError.body.id).to.equal('BadRequest');
    expect(generatedError.body.cause).to.deep.equal(expectedCause);
    expect(generatedError.body.message).to.equal('I am expected to be the cause');
    done();
  });

  it('Should return a bad request error with a cause and a message on badRequest call', done => {
    const expectedCause = new Error('I am expected to be the cause');
    const expectedMessage = 'A message as expected';

    const generatedError = errors.badRequest(expectedCause, expectedMessage);

    expect(generatedError.status).to.equal(400);
    expect(generatedError.body.id).to.equal('BadRequest');
    expect(generatedError.body.cause).to.deep.equal(expectedCause);
    expect(generatedError.body.message).to.deep.equal(expectedMessage);
    done();
  });

  it('Should return a database error on databaseError call', done => {

    const generatedError = errors.databaseError();

    expect(generatedError.status).to.equal(500);
    expect(generatedError.body.id).to.equal('DatabaseError');
    expect(generatedError.body.cause.message).to.equal('No Cause');
    done();
  });

  it('Should return a database error with a cause on databaseError call', done => {
    const expectedCause = new Error('I am expected as a cause');
    const generatedError = errors.databaseError(expectedCause);

    expect(generatedError.status).to.equal(500);
    expect(generatedError.body.id).to.equal('DatabaseError');
    expect(generatedError.body.cause).to.deep.equal(expectedCause);
    expect(generatedError.body.message).to.equal('I am expected as a cause');
    done();
  });

  it('Should return a database error with a cause and a message on databaseError call', done => {
    const expectedCause = new Error('I am expected as a cause');
    const expectedMessage = 'I am a message';
    const generatedError = errors.databaseError(expectedCause, expectedMessage);

    expect(generatedError.status).to.equal(500);
    expect(generatedError.body.id).to.equal('DatabaseError');
    expect(generatedError.body.cause).to.deep.equal(expectedCause);
    expect(generatedError.body.message).to.equal(expectedMessage);
    done();
  });

  it('Should return a internal error on internalError call', done => {

    const generatedError = errors.internalError();

    expect(generatedError.status).to.equal(500);
    expect(generatedError.body.id).to.equal('InternalError');
    expect(generatedError.body.cause.message).to.equal('No Cause');
    done();
  });

  it('Should return a internal error with a cause on internalError call', done => {
    const expectedCause = new Error('I am a cause');

    const generatedError = errors.internalError(expectedCause);

    expect(generatedError.status).to.equal(500);
    expect(generatedError.body.id).to.equal('InternalError');
    expect(generatedError.body.cause).to.deep.equal(expectedCause);
    expect(generatedError.body.message).to.equal('I am a cause');
    done();
  });

  it('Should return a internal error with a cause and a message on internalError call', done => {
    const expectedCause = new Error('A Cause');
    const expectedMessage = 'A message';

    const generatedError = errors.internalError(expectedCause, expectedMessage);

    expect(generatedError.status).to.equal(500);
    expect(generatedError.body.id).to.equal('InternalError');
    expect(generatedError.body.cause).to.deep.equal(expectedCause);
    expect(generatedError.body.message).to.equal('A message');
    done();
  });

});
