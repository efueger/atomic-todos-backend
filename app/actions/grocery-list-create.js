'use strict';

const Action = require('./base-action');

class GroceryListCreateAction extends Action {

  constructor(app) {
    super(app);
    this.pre = this.app.validators.GroceryList.create;
  }

  handle(request, response, next) {

    this.app.models.GroceryList.create({ items: request.body })
    .then(() => response.sendStatus(201))
    .catch(error => next(this.app.errors.databaseError(error, 'Could not save Grocery List')));

  }

}

module.exports = GroceryListCreateAction;
