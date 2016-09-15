'use strict';

const app = require('./app');
const db = require('./models/db-connection.js');
const logger = require('./loggers/logger')('index');
const port = process.env.PORT || 3000;

app.listen(port, () => logger.info(`Up on port: ${port}`));
