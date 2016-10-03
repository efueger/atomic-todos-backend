const winstonModule = require('winston');
const baseLogger = require('./base-logger');

const winston = new (winstonModule.Logger)({
  transports: [
    new (winstonModule.transports.File)({
      name: 'info-file',
      filename: 'info.log',
      level: 'info',
    }),
    new (winstonModule.transports.File)({
      name: 'error-file',
      filename: 'error.log',
      level: 'error',
    }),
  ],
});


module.exports = baseLogger({
  winston,
  tagFormatter: tag => `[${tag.toUpperCase()}]`,
});
