const express = require('express');
const actions = require('./actions');
const etc = require('./etc');
const middlewares = require('./middlewares');
const models = require('./models');
const validators = require('./validators');
const loggers = require('./loggers');

const logger = loggers.consoleLogger(loggers.tags.MIDDLEWARE);

const appFactory = moduleRegister => {

  const register = moduleRegister || etc.register;

  const app = express();
  logger.info('Using: Morgan');
  app.use(middlewares.morgan);

  logger.info('Using: Content Type Checker');
  app.use(middlewares.contentTypeChecker);

  logger.info('Using: Body Parser');
  app.use(middlewares.bodyParser);

  logger.info('Using: Default Headers Remover');
  app.use(middlewares.defaultHeaderRemover);

  register.models(app, models);
  register.validators(app, validators);
  register.actions(app, actions);
  register.errors(app, etc.errors);

  logger.info('Using: Error Handler');
  app.use(middlewares.errorHandler);

  logger.info('Using: Not Found Error Handler');
  app.use(middlewares.notFoundErrorHandler);

  return app;
};


module.exports = appFactory;
