'use strict';

const port = process.env.PORT || 3000;
const app = require('./app')();
const logger = require('./loggers/logger')('index');

app.listen(port, () => logger.info(`Up on port: ${port}`));
