const winston = require('winston');
const baseLogger = require('./base-logger');
const chalk = require('chalk');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)()
  ]
});

const tagFormatter = (tag) => chalk.magenta(`[${tag.toUpperCase()}]`);
const messageFormatter = (message) => chalk.green(message);

module.exports = baseLogger({
  winston: logger,
  tagFormatter: tagFormatter,
  messageFormatter: messageFormatter
});
