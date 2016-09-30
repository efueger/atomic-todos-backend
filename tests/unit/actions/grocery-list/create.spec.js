
'use strict';

const createActionFactory = require(path.join(process.cwd(), 'actions', 'grocery-list', 'create'));

describe(chalk.magenta('Unit: Action: grocery-list.create'), () => {

  const GroceryListModel = { create: sinon.stub() };
  const GroceryListValidator = { create: sinon.stub() };
  const app = {
    models: { GroceryList : GroceryListModel },
    validators: { GroceryList: GroceryListValidator }
  };

  it('Should call models.GroceryList.create and respond with 201', (done) => {
    app.validators.GroceryList.create.returns(null);
    app.models.GroceryList.create.resolves();
    const request = {body:[]};
    const response = {sendStatus: sinon.stub()};
    const expectedGroceryList = {
      date: new Date(),
      finished: false,
      items: request.body
    };

    const createAction = createActionFactory(app);

    createAction(request, response, () => {
      const actuallySavedGroceryList = app.models.GroceryList.create.firstCall.args[0];

      expect(response.sendStatus).to.have.been.calledWith(201);
      expect(app.models.GroceryList.create).to.have.been.called;

      expect(actuallySavedGroceryList.finished).to.equal(expectedGroceryList.finished);
      expect(actuallySavedGroceryList.items).to.deep.equal(expectedGroceryList.items);
      expect(actuallySavedGroceryList.date).to.be.a('Date');
      expect(actuallySavedGroceryList.date.toDateString()).to.equal(expectedGroceryList.date.toDateString());
      done();
    });

  });

  it('Should call next with an error when models.GroceryList.save rejects', (done) => {
    const expectedErrorCause = new Error('Expected error');
    app.models.GroceryList.create.rejects(expectedErrorCause);
    app.validators.GroceryList.create.returns(null);
    const request = {};
    const response = {};

    const createAction = createActionFactory(app);

    createAction(request, response, (error) => {
      expect(error).to.have.deep.property('message', 'Could not save Grocery List');
      expect(error).to.have.deep.property('status', 500);
      expect(error).to.have.deep.property('cause', expectedErrorCause);
      done();
    });
  });

  it('Should respond with 400 when request body is invalid', (done) => {

    const expectedErrorCause = new Error('Expected error');
    app.validators.GroceryList.create.returns(expectedErrorCause);
    const request = {};
    const response = {};

    const createAction = createActionFactory(app);

    createAction(request, response, (error) => {
      expect(error).to.have.deep.property('message', expectedErrorCause.message);
      expect(error).to.have.deep.property('status', 400);
      expect(error).to.have.deep.property('cause', expectedErrorCause);
      done();
    });

  });

});
