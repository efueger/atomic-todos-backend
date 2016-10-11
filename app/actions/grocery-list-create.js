'use strict';

const Action = require('./base-action').Action;

class GroceryListCreateAction extends Action {

  handle(request, response, next) {

    const validationError = this.app.validators.GroceryList.create(request);

    if (validationError) {
      return next(this.app.errors.badRequest(validationError));
    }

    this.app.models.GroceryList.create({
      items: request.body,
      date: new Date(),
      finished: false
    })
    .then(() => response.sendStatus(201))
    .catch(error => next(this.app.errors.databaseError(error, 'Could not save Grocery List')));

  }

}

module.exports = GroceryListCreateAction;
