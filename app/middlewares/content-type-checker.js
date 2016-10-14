const exists = require('exists');
const errors = require('../etc/errors');
const GET = require('../etc/http').METHODS.GET.toUpperCase();

const HEADER_REGEX_MATCH = /^application\/json$/g;

module.exports = (request, response, next) => {

  if (request.method == GET) {
    return next();
  }

  const requestContentType = request.headers['content-type'];

  if (!exists(requestContentType)) {
    return next(errors.badRequest(new Error('Content-Type header is not set for this request')));
  }

  if (!requestContentType.match(HEADER_REGEX_MATCH)) {
    return next(errors.badRequest(new Error('Request Content-Type header is invalid. It must be only application/json')));
  }

  return next();
};
