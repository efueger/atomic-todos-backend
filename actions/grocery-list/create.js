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

    app.models.GroceryList.create({
      items: request.body,
      date: new Date(),
      finished: false
    })
    .then(() => {
      response.sendStatus(201);
      return next();
    })
    .catch((error) => next({
      cause: error,
      status: 500,
      message: 'Could not save Grocery List'
    }));
  };
};
