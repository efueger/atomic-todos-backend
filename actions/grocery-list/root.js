'use strict';

module.exports = class RootAction {

  constructor(model) {
    this.model = model;
  }

  apply(request, response, next) {

    response.json({
      hello: 'Grocery lists'
    });

    next();

  }

}
