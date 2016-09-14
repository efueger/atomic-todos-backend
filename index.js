'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

routes.forEach((route) => app.use(route));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Up on port: ${port}`));
