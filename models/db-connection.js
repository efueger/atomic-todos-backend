const mongoose = require('mongoose');
const logger = require('../loggers/logger')('mongo');
const chalk = require('chalk');

const databaseUrl = process.env.ATOMIC_MONGO_URL;

if(!databaseUrl) {
  throw error(chalk.red('Database connection url is not set on this environment.'));
}

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => logger.info('Connected'));
mongoose.connection.on('error', (error) => logger.error(`Error connecting to mongoose: ${error}`));
mongoose.connection.on('disconnected', () => logger.info('Disconnected'));
