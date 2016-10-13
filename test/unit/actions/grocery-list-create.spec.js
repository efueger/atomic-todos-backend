const CreateAction = require('../../../app/actions/grocery-list-create');

describe('Unit: Action: grocery-list.create', () => {
  'use strict';
  let request = {};
  let response = {};
  let createListAction = {};

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
    createListAction = new CreateAction(app);
    done();
  });

  it('Should call models.GroceryList.create and respond with 201', done => {
    app.validators.GroceryList.create.returns(null);
    app.models.GroceryList.create.resolves();
    request.body = [];
    const expectedGroceryList = { date: new Date(), finished: false, items: request.body };

    response.sendStatus = status => {
      const actuallySavedGroceryList = app.models.GroceryList.create.firstCall.args[0];
      expect(status).to.equal(201);
      expect(app.models.GroceryList.create).to.have.been.called;
      expect(actuallySavedGroceryList.items).to.deep.equal(expectedGroceryList.items);
      done();
    };

    createListAction.handle(request, response);
  });

  it('Should call next with an error when models.GroceryList.save rejects', done => {
    const expectedErrorCause = new Error('Expected error');
    const expectedForwardedError = { message: 'I am a mistake!' };
    app.models.GroceryList.create.rejects(expectedErrorCause);
    app.errors.databaseError.returns(expectedForwardedError);
    app.validators.GroceryList.create.returns(null);

    createListAction.handle(request, response, error => {
      expect(app.errors.databaseError).to.have.been.calledWith(expectedErrorCause);
      expect(error).to.deep.equal(expectedForwardedError);
      done();
    });
  });

  it('Should set pre as validator function', done => {
    expect(createListAction.pre).to.equal(app.validators.GroceryList.create);
    done();
  });

});
