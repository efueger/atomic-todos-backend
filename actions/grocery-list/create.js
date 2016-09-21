'use strict';

module.exports = function createAction(request, response, next) {

  let groceryList = {};
  groceryList.items = request.body;
  groceryList.date = new Date();
  groceryList.finished = false;

  this.GroceryStoreList.save(groceryList)
  .then(() => {
    response.sendStatus(201);
    next();
  })
  .catch((error) => {
    response.status(500).json(error);
    next(error);
  });

};
