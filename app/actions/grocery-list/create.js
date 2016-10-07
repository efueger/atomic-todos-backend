module.exports = app =>
  (request, response, next) => {
    const validationError = app.validators.GroceryList.create(request);

    if (validationError) {
      return next(app.errors.badRequest(validationError));
    }

    app.models.GroceryList.create({
      items: request.body,
      date: new Date(),
      finished: false
    })
    .then(() => response.sendStatus(201))
    .catch(error => next(app.errors.databaseError(error, 'Could not save Grocery List')));

  };
