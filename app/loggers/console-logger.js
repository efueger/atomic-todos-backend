const winstonModule = require('winston');
const BaseLogger = require('./base-logger');
const chalk = require('chalk');
const tags = require('./tags');

const winston = new (winstonModule.Logger)({
  transports: [
    new (winstonModule.transports.Console)()
  ]
});

module.exports = tag => new BaseLogger(
  { winston,
    tag: tag || tags.DEFAULT,
    tagFormatter: tag => chalk.magenta(`[${tag.text.toUpperCase()}]`),
    messageFormatter: message => chalk.green(message)
  }
);
