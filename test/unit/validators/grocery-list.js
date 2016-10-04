describe(chalk.magenta('Unit: Validators: GroceryListValidator'), () => {

  const validator = require(path.join(process.cwd(), 'app', 'validators', 'grocery-list'));

  it('Should return an error with empty request body', (done) => {
    const expectedErrorMessage = 'Request body is empty';

    const validationError = validator.create({});

    expect(validationError.constructor).to.deep.equal(Error);
    expect(validationError).to.have.deep.property('message', expectedErrorMessage);
    done();
  });

  it('Should return an error with a request body that is not an array', (done) => {
    const expectedErrorMessage = 'Request body is not an array';

    const validationError = validator.create({body: 'Whatever'});

    expect(validationError.constructor).to.deep.equal(Error);
    expect(validationError).to.have.deep.property('message', expectedErrorMessage);
    done();
  });

});
