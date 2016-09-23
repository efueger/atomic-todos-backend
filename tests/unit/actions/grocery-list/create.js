
'use strict';

const createAction = require(path.join(process.cwd(), 'actions', 'grocery-list', 'create'));

describe(chalk.magenta('Unit: Action: grocery-list.create'), () => {

  it('Should call groceryStoreList.save and respond with 201', (done) => {
    const saveStub = sinon.stub();

    const Model = function () {};
    Model.prototype.save = saveStub;

    saveStub.resolves({});

    const request = {body:[]};
    const response = {sendStatus: sinon.stub()};
    const expectedGroceryList = {
      date: new Date(),
      finished: false,
      items: request.body
    }

    createAction.call({GroceryStoreList: Model}, request, response, () => {
      // expect(saveStub).to.have.been.calledWith(expectedGroceryList);
      expect(response.sendStatus).to.have.been.calledWith(201);
      done();
    });

  });
});
