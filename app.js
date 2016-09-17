const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

routes.forEach((route) => app.use(route.prefix, route.router));

module.exports = app;
