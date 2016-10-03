const winstonModule = require('winston');
const baseLogger = require('./base-logger');
const chalk = require('chalk');

const winston = new (winstonModule.Logger)({
  transports: [
    new (winstonModule.transports.Console)(),
  ],
});

const tagFormatter = tag => chalk.magenta(`[${tag.text.toUpperCase()}]`);
const messageFormatter = message => chalk.green(message);

module.exports = baseLogger({ winston, tagFormatter, messageFormatter });
