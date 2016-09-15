'use strict';

const winston = require('winston');
const chalk = require('chalk');

const baseLogger = {
  info: (tag, tagColor, message, messageColor) => winston.info(tagColor(tag), messageColor(message)),
  error: (tag, tagColor, message, messageColor) => winston.error(tagColor(tag), messageColor(message))
};

module.exports = (tag) => {

  return {
    info: (message) => baseLogger.info(`[${tag.toUpperCase()}]`, chalk.magenta, message, chalk.green),
    error: (message) => baseLogger.error(`[${tag.toUpperCase()}]`, chalk.magenta, message, chalk.red)
  };

};
