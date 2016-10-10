module.exports = (request, response, next) => {
  response.removeHeader('X-Powered-By');
  response.removeHeader('content-length');
  response.removeHeader('etag');
  response.removeHeader('date');
};
