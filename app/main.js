const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const loggers = require('./loggers');
const contentTypeChecker = require('./middlewares/content-type-checker');
const errorHandler = require('./middlewares/error-handler');
const notFoundErrorHandler = require('./middlewares/not-found-handler');
const defaultHeaderRemover = require('./middlewares/default-header-remover');
const folderLoader = require('./etc/folder-loader.js');
const applicationErrors = require('./etc/errors.js');
const actionRegister = require('./etc/action-register');
const actions = require('./actions');
const logger = loggers.consoleLogger(loggers.tags.SETUP);

const appFactory = () => {
  const app = express();

  app.use(morgan('common'));
  app.use(contentTypeChecker);
  app.use(bodyParser.json());

  const load = folderLoader(app, logger);

  load('models');
  load('validators');
  actionRegister.registerAll(app, actions);

  app.use(errorHandler);
  app.use(defaultHeaderRemover);
  app.use(notFoundErrorHandler);

  app.errors = applicationErrors;

  return app;
};


module.exports = appFactory;
