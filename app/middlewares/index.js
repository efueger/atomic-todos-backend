const contentTypeChecker = require('./content-type-checker');
const defaultHeaderRemover = require('./default-header-remover');
const errorHandler = require('./error-handler');
const notFoundErrorHandler = require('./not-found-handler');
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = {
  morgan: morgan('common'),
  contentTypeChecker,
  bodyParser: bodyParser.json(),
  defaultHeaderRemover,
  errorHandler,
  notFoundErrorHandler
};
