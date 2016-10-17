const BaseLogger = require('./base-logger');
const consoleLogger = require('./console-logger');
const fileLogger = require('./file-logger');
const requestConsoleLogger = require('./request-console-logger');
const requestFileLogger = require('./request-file-logger');
const tags = require('./tags');

module.exports = { BaseLogger, consoleLogger, fileLogger, requestConsoleLogger, requestFileLogger, tags };
