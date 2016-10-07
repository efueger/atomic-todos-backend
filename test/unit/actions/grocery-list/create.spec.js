const createActionFactory = require(path.join(process.cwd(), 'app', 'actions', 'grocery-list', 'create'));

describe(chalk.magenta('Unit: Action: grocery-list.create'), () => {
  'use strict';
  let request = {};
  let response = {};

  const GroceryListModel = { create: sinon.stub() };
  const GroceryListValidator = { create: sinon.stub() };
  const app = {
    models: { GroceryList : GroceryListModel },
    validators: { GroceryList: GroceryListValidator },
    errors: {badRequest: sinon.stub(), databaseError: sinon.stub()}
  };

  beforeEach(done => {
    request = {};
    response = {};
    done();
  });

  it('Should call models.GroceryList.create and respond with 201', done => {
    app.validators.GroceryList.create.returns(null);
    app.models.GroceryList.create.resolves();
    const createAction = createActionFactory(app);
    request.body = [];
    const expectedGroceryList = { date: new Date(), finished: false, items: request.body };

    response.sendStatus = status => {
      const actuallySavedGroceryList = app.models.GroceryList.create.firstCall.args[0];
      expect(status).to.equal(201);
      expect(app.models.GroceryList.create).to.have.been.called;
      expect(actuallySavedGroceryList.finished).to.equal(expectedGroceryList.finished);
      expect(actuallySavedGroceryList.items).to.deep.equal(expectedGroceryList.items);
      expect(actuallySavedGroceryList.date).to.be.a('Date');
      expect(actuallySavedGroceryList.date.toDateString()).to.equal(expectedGroceryList.date.toDateString());
      done();
    };

    createAction(request, response);
  });

  it('Should call next with an error when models.GroceryList.save rejects', done => {
    const expectedErrorCause = new Error('Expected error');
    const expectedForwardedError = { message: 'I am a mistake!' };
    app.models.GroceryList.create.rejects(expectedErrorCause);
    app.errors.databaseError.returns(expectedForwardedError);
    app.validators.GroceryList.create.returns(null);

    const createAction = createActionFactory(app);

    createAction(request, response, error => {
      expect(app.errors.databaseError).to.have.been.calledWith(expectedErrorCause);
      expect(error).to.deep.equal(expectedForwardedError);
      done();
    });
  });

  it('Should forward a badRequest error wrapper when request body is invalid', done => {

    const expectedErrorCause = new Error('Expected error');
    const expectedForwardedError = { message:'I am a mistake!' };
    app.validators.GroceryList.create.returns(expectedErrorCause);
    app.errors.badRequest.returns(expectedForwardedError);

    const createAction = createActionFactory(app);

    createAction(request, response, error => {
      expect(app.errors.badRequest).to.have.been.calledWith(expectedErrorCause);
      expect(error).to.deep.equal(expectedForwardedError);
      done();
    });

  });

});
