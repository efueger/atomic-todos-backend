const BaseLogger = require('./base-logger');
const consoleLogger = require('./console-logger');
const fileLogger = require('./file-logger');
const tags = require('./tags');

module.exports = { BaseLogger, consoleLogger, fileLogger, tags };
