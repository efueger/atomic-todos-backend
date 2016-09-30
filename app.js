'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./loggers/console-logger')('setup');
const contentTypeChecker = require('./middlewares/content-type-checker');
const errorHandler = require('./middlewares/error-handler');
const notFoundErrorHandler = require('./middlewares/not-found-handler');
const loadModuleFolderCreator = require('./etc/folder-loader.js');

const appFactory = () => {

  const app = express();

  app.use(morgan('common'));
  app.use(contentTypeChecker);
  app.use(bodyParser.json());

  const modelsRootPath = path.join(process.cwd(), 'models');
  const validatorsRootPath = path.join(process.cwd(), 'validators');
  const routesRootPath = path.join(process.cwd(), 'routes');

  const loadModuleFolder = loadModuleFolderCreator(app, logger);

  loadModuleFolder('models');
  loadModuleFolder('validators');
  loadModuleFolder('routes', (app, routeBlueprint) => {
    let route = routeBlueprint(app);
    route.router.stack.forEach(stackItem => {
      stackItem.route.stack.forEach(innerStackItem => {
        logger.info(`Route: ${innerStackItem.method.toUpperCase()} ${path.join(route.prefix, stackItem.route.path)}`);
      });
    });

    app.use(route.prefix, route.router);
  });

  app.use(errorHandler);
  app.use(notFoundErrorHandler);

  return app;

};


module.exports = appFactory;
