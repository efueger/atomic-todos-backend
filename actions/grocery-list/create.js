'use strict';

module.exports = (app) => {

  return (request, response, next) => {

    let groceryList = {
      items: request.body,
      date: new Date(),
      finished: false
    };

    app.models.GroceryList.create(groceryList)
    .then(() => {
      response.sendStatus(201);
      next();
    })
    .catch(next);
  };

};
