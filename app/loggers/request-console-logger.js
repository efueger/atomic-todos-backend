const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [new (winston.transports.Console)({ colorize: false })]
});

logger.transports.console.colorize = false;

module.exports = logger;
