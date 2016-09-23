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
const app = express();

const loadModels = (modelsPath, app) => {
  fileSystem.readdirSync(modelsPath).forEach(file => {
    const modelName = camelCase(file.replace('.js', ''));
    logger.info(`Model: ${modelName}`);
    app.models[modelName] = require(path.join(modelsPath, file));
  });
};

const loadRoutes = (routesPath, app) => {
  fileSystem.readdirSync(routesPath).forEach(file => {
    let route = require(path.join(routesPath, file))(app);
    route.router.stack.forEach(stackItem => {
      stackItem.route.stack.forEach(innerStackItem => {
        logger.info(`Route: ${innerStackItem.method.toUpperCase()} ${path.join(route.prefix, stackItem.route.path)}`);
      });
    });

    app.use(route.prefix, route.router);
  });
};

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.models = {};

const modelsRootPath = path.join(process.cwd(), 'models');
const routesRootPath = path.join(process.cwd(), 'routes');

loadModels(modelsRootPath, app);
loadRoutes(routesRootPath, app);

module.exports = app;
