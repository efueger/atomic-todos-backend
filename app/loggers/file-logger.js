const winstonModule = require('winston');
const BaseLogger = require('./base-logger');

const winston = new (winstonModule.Logger)({
  transports: [
    new (winstonModule.transports.File)({
      name: 'info-file',
      filename: 'infos.log',
      level: 'info'
    }),
    new (winstonModule.transports.File)({
      name: 'error-file',
      filename: 'errors.log',
      level: 'error'
    })
  ]
});


module.exports = tag => new BaseLogger({ winston, tag });
