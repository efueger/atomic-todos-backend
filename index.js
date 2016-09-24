'use strict';

const port = process.env.PORT || 3000;
const app = require('./app')();
const logger = require('./loggers/logger')('index');
const db = require('./etc/database');

db.connect({ url: process.env.ATOMIC_MONGO_URL });
app.listen(port, () => logger.info(`Up on port: ${port}`));
