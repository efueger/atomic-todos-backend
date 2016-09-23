'use strict';

module.exports = function createAction(request, response, next) {

  let groceryList = {
    items: request.body,
    date: new Date(),
    finished: false
  };

  const model = new this.GroceryStoreList(groceryList);

  model.save()
  .then(() => {
    response.sendStatus(201);
    next();
  })
  .catch((error) => {
    response.status(500).json(error);
    next(error);
  });

};
