'use strict';

class BaseLogger {

  constructor(config) {

    if (!config) {
      throw new Error('Failed to create a new logger: No config object specified.');
    }

    if (!config.winston) {
      throw new Error('Failed to create a new logger: No winston specified on its config object.');
    }

    if (!config.tag) {
      throw new Error('Failed to create a new logger: No tag specified on its config object.');
    }

    this.tag = config.tag;
    this.winston = config.winston;
    this._tagFormatter = config.tagFormatter || (tag => tag.text);
    this._messageFormatter = config.messageFormatter || (message => message);
  }

  _log(message, log) {
    if (message) {
      log(this._tagFormatter(this.tag), this._messageFormatter(message));
    }
  }

  info(message) {
    this._log(message, this.winston.info);
  }

  error(message) {
    this._log(message, this.winston.error);
  }

}

module.exports = BaseLogger;
