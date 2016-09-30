'use strict';

module.exports = (app) => {

  return (request, response, next) => {

    const validationError = app.validators.GroceryList.create(request.body);

    if (validationError) {
      return next({
        status: 400,
        message: validationError.message,
        cause: validationError
      });
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
    .catch((error) => next({
      cause: error,
      status: 500,
      message: 'Could not save Grocery List'
    }));
  };
};
