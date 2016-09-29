const winston = require('winston');
const baseLogger = require('./base-logger');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'info.log',
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: 'error.log',
      level: 'error'
    })
  ]
});

const tagFormatter = (tag) => `[${tag.toUpperCase()}]`;
const messageFormatter = (message) => message;

module.exports = baseLogger({
  winston: logger,
  tagFormatter: tagFormatter,
  messageFormatter: messageFormatter
});
