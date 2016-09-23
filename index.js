'use strict';

const port = process.env.PORT || 3000;
const app = require('./app');
const db = require('./etc/database')({ url: process.env.ATOMIC_MONGO_URL });
const logger = require('./loggers/logger')('index');

app.listen(port, () => logger.info(`Up on port: ${port}`));
