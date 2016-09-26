
'use strict';

const createActionFactory = require(path.join(process.cwd(), 'actions', 'grocery-list', 'create'));

describe(chalk.magenta('Unit: Action: grocery-list.create'), () => {

  const GroceryListModel = { create: sinon.stub() };
  const GroceryListValidator = { create: () => null };
  const app = {
    models: { GroceryList : GroceryListModel },
    validators: { GroceryList: GroceryListValidator }
  };

  it('Should call models.GroceryList.create and respond with 201', (done) => {
    app.models.GroceryList.create.resolves({});
    const request = {body:[]};
    const response = {sendStatus: sinon.stub()};
    const expectedGroceryList = {
      date: new Date(),
      finished: false,
      items: request.body
    };

    const createAction = createActionFactory(app);

    createAction(request, response, () => {
      expect(app.models.GroceryList.create).to.have.been.calledWith(expectedGroceryList);
      expect(response.sendStatus).to.have.been.calledWith(201);
      done();
    });
  });

  it('Should call next with an error when models.GroceryList.save rejects', (done) => {
    const expectedError = new Error('Expected error');
    app.models.GroceryList.create.rejects(expectedError);
    const request = {};
    const response = {};

    const createAction = createActionFactory(app);

    createAction(request, response, (error) => {
      expect(error).to.deep.equal(expectedError);
      expect(error).to.have.deep.property('message', expectedError.message);
      done();
    });
  });

  it.skip('Should respond with 400 when request body is invalid', (done) => {

  });

});
