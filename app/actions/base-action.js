
'use strict';

const loggers = require('../loggers');
const logger = loggers.consoleLogger(loggers.tags.ROUTE);

class Action {

  constructor(app) { this.app = app; }

  register(method, endpoint) {

    if (!this.handle) {
      throw new Error(`handle(req, res, next) not implemented on ${ this.constructor.name }`);
    }

    if (!method) {
      throw new Error(`No HTTP method specified for ${ this.constructor.name }`);
    }

    if(!endpoint) {
      throw new Error(`No endpoint specified for ${ this.constructor.name }`);
    }

    if (this.pre) {
      this.app[method](endpoint, this.pre.bind(this));
    }

    logger.info(`${method.toUpperCase()} ${endpoint} - ${this.constructor.name}`);
    this.app[method](endpoint, this.handle.bind(this));
  }

}

module.exports = Action;
