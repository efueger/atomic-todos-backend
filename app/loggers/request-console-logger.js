const winston = require('winston');

module.exports = new (winston.Logger)({
  colorize: false,
  transports: [new (winston.transports.Console)({ colorize: false })]
});
