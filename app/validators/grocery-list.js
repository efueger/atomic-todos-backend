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

    return next();
  }

};
