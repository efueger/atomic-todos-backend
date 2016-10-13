const exists = require('exists');
const errors = require('../etc/errors');

module.exports = (request, response, next) => {
  const requestContentType = request.headers['content-type'];

  if (!exists(requestContentType)) {
    return next(errors.badRequest(new Error('Content-Type header is not set for this request')));
  }

  if (requestContentType.indexOf('application/json') === -1) {
    return next(errors.badRequest(new Error('Request Content-Type header is invalid. It must be only application/json')));
  }

  return next();
};
