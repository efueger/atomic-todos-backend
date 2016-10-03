const exists = require('exists');

module.exports = (request, response, next) => {
  const requestContentType = request.headers['content-type'];

  if (!exists(requestContentType)) {
    return response.status(400).send('Content-Type header is not set for this request');
  }

  if (requestContentType.indexOf('application/json') === -1) {
    return response.status(400).send('Request Content-Type header is invalid. It must be only application/json');
  }

  return next();
};
