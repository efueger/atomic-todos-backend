'use strict';

module.exports = (app) => {

  return (request, response, next) => {

    const validationError = app.validators.GroceryList.create(request);

    if (validationError) {
      return next(app.errors.BAD_REQUEST(validationError));
    }

    app.models.GroceryList.create({
      items: request.body,
      date: new Date(),
      finished: false
    })
    .then(() => {
      return response.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error');
      next(app.errors.DATABASE_ERROR(error, 'Could not save Grocery List'))
    });
  };
};
