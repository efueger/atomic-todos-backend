'use strict';

const path = require('path');
const camelCase = require('uppercamelcase');
const fileSystem = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const camelcase = require('camelcase');
const groceryRouterFactory = require('./routes/grocery-list');
const logger = require('./loggers/logger')('setup');
const contentTypeChecker = require('./middlewares/content-type-checker');

const removeJsExtension = (fileName) => fileName.replace('.js', '');

const loadModels = (modelsPath, app) => {
  fileSystem.readdirSync(modelsPath).forEach(modelFile => {
    const modelName = camelCase(removeJsExtension(modelFile));
    logger.info(`Model: ${modelName}`);
    app.models[modelName] = require(path.join(modelsPath, modelFile));
  });
};

const loadRoutes = (routesPath, app) => {
  fileSystem.readdirSync(routesPath).forEach(routeFile => {
    let route = require(path.join(routesPath, routeFile))(app);
    route.router.stack.forEach(stackItem => {
      stackItem.route.stack.forEach(innerStackItem => {
        logger.info(`Route: ${innerStackItem.method.toUpperCase()} ${path.join(route.prefix, stackItem.route.path)}`);
      });
    });

    app.use(route.prefix, route.router);
  });
};

const appFactory = () => {


  const app = express();

  app.use(morgan('tiny'));
  app.use(bodyParser.json());
  app.use(contentTypeChecker);

  app.models = {};

  const modelsRootPath = path.join(process.cwd(), 'models');
  const routesRootPath = path.join(process.cwd(), 'routes');

  loadModels(modelsRootPath, app);
  loadRoutes(routesRootPath, app);

  return app;

};


module.exports = appFactory;
