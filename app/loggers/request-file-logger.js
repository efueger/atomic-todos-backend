const winston = require('winston');

module.exports = new (winston.Logger)({
  colorize: false,
  transports: [
    new (winston.transports.File)({
      name: 'requestInfoFile',
      filename: 'requests.log',
      level: 'info',
      colorize: false
    }),
    new (winston.transports.File)({
      name: 'requestErrorFile',
      filename: 'request-errors.log',
      level: 'error',
      colorize: false
    })
  ]
});
