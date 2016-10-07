const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const loggers = require('./loggers');
const contentTypeChecker = require('./middlewares/content-type-checker');
const errorHandler = require('./middlewares/error-handler');
const notFoundErrorHandler = require('./middlewares/not-found-handler');
const folderLoader = require('./etc/folder-loader.js');
const applicationErrors = require('./etc/errors.js');

const logger = loggers.consoleLogger(loggers.tags.SETUP);

const appFactory = () => {
  const app = express();

  app.use(morgan('common'));
  app.use(contentTypeChecker);
  app.use(bodyParser.json());

  const load = folderLoader(app, logger);

  load('models');
  load('validators');
  load('routes', (application, routeBlueprint) => {
    const route = routeBlueprint(app);
    route.router.stack.forEach(stackItem => {
      stackItem.route.stack.forEach(innerStackItem => {
        logger.info(`Route: ${innerStackItem.method.toUpperCase()} ${path.join(route.prefix, stackItem.route.path)}`);
      });
    });

    application.use(route.prefix, route.router);
  });

  app.use(errorHandler);
  app.use(notFoundErrorHandler);

  app.errors = applicationErrors;

  return app;
};


module.exports = appFactory;
