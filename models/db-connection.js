'use strict';

const mongoose = require('mongoose');
const logger = require('../loggers/logger')('mongo');
const chalk = require('chalk');

module.exports = (onConnect, onError, onDisconnect) => {

  onConnect = onConnect || () => logger.info('Connected');
  onError = onError || ((error) => logger.error(`Error connecting to mongoose: ${error}`));
  onDisconnect = onDisconnect || () => logger.info('Disconnected');

  const databaseUrl = process.env.ATOMIC_MONGO_URL;

  if(!databaseUrl) {
    throw error(chalk.red('Database connection url is not set on this environment.'));
  }

  mongoose.Promise = global.Promise;

  mongoose.connect(databaseUrl);

  mongoose.connection.on('connected', onConnect);
  mongoose.connection.on('error', onError);
  mongoose.connection.on('disconnected', onDisconnect);

};
