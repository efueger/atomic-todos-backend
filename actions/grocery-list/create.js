'use strict';

module.exports = (app) => {

  return (request, response, next) => {

    const validationError = app.validators.GroceryList.create(request.body);

    if (validationError) {
      return next(validationError);
    }

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
