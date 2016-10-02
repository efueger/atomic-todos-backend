'use strict';

const mongoose = require('mongoose');
const path = require('path');
const logger = require(path.join(process.cwd(), 'loggers', 'console-logger'))('mongo');
const chalk = require('chalk');

module.exports = {

  connect(config) {

    const onConnect = config.onConnect || () => logger.info('Connected');
    const onError = config.onError || ((error) => logger.error(`Error connecting to mongoose: ${error}`));
    const onDisconnect = config.onDisconnect || () => logger.info('Disconnected');

    if(!config.url) {
      throw error(chalk.red('Database connection url is not set on this environment.'));
    }

    mongoose.Promise = global.Promise;

    mongoose.connect(config.url);

    mongoose.connection.on('connected', onConnect);
    mongoose.connection.on('error', onError);
    mongoose.connection.on('disconnected', onDisconnect);

  },

  disconnect: () => mongoose.connection.close()
};
