const exists = require('exists');
const errors = require('../etc/errors');

module.exports = {

  create(request, response, next) {
    if (!exists(request.body)) {
      return next(errors.badRequest(new Error('Request body is empty')));
    }

    if (!(request.body instanceof Array)) {
      return next(errors.badRequest(new Error('Request body is not an array')));
    }

    if (request.body.length === 0) {
      return next(errors.badRequest(new Error('There are no items on request body')));
    }

    return next();
  }

};
