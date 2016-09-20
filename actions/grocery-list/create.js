'use strict';

module.exports = class CreateAction{

  constructor(model, validator) {
    this.model = model;
    this.validator = validator;
  }

  apply(request, response, next) {

    this.model
    .save({})
    .then(() => {
      response.sendStatus(201);
      next();
    })
    .catch((error) => {
      response.status(500).json(error);
      next(error);
    });
  }

}
