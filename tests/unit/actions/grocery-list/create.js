
'use strict';

const createActionFactory = require(path.join(process.cwd(), 'actions', 'grocery-list', 'create'));

describe(chalk.magenta('Unit: Action: grocery-list.create'), () => {

  it('Should call models.GroceryList.create and respond with 201', (done) => {
    const GroceryList = { create: sinon.stub() };
    GroceryList.create.resolves();

    const request = {body:[]};
    const response = {sendStatus: sinon.stub()};
    const expectedGroceryList = {
      date: new Date(),
      finished: false,
      items: request.body
    }
    const createAction = createActionFactory({
      models: { GroceryList : GroceryList }
    });

    createAction(request, response, () => {
      expect(GroceryList.create).to.have.been.calledWith(expectedGroceryList);
      expect(response.sendStatus).to.have.been.calledWith(201);
      done();
    });

  });
});
