const contentTypeChecker = require('./content-type-checker');
const defaultHeaderRemover = require('./default-header-remover');
const errorHandler = require('./error-handler');
const notFoundErrorHandler = require('./not-found-handler');
const bodyParser = require('body-parser');

module.exports = {
  contentTypeChecker,
  bodyParser: bodyParser.json(),
  defaultHeaderRemover,
  errorHandler,
  notFoundErrorHandler
};
