'use strict';

const baseLogger = {
    info: (winston, tag, message) => {
      if (message) {
        winston.info(tag, message);
      }
    },
    error: (winston, tag, message) => {
      if (message) {
        winston.error(tag, message);
      }
    }
};

module.exports = (config) => {

  if (!config.winston) {
    throw new Error('Failed to create a new logger: No winston specified on its config object.');
  }

  const baseLoggerDecoratorCreator = (tag) => {

    const format = (tag, message) => {
      tag = (tag || config.defaultTag) || 'no-tag';
      tag = (config.tagFormatter) ? config.tagFormatter(tag) : tag;
      message = (config.messageFormatter && message) ? config.messageFormatter(message) : message;

      return {
        tag: tag,
        message: message
      };
    };

    const baseLoggerDecorator = {
      info: (message) => {
        const formattedLog = format(tag, message);
        baseLogger.info(config.winston, formattedLog.tag, formattedLog.message);
      },
      error: (message) => {
        const formattedLog = format(tag, message);
        baseLogger.error(config.winston, formattedLog.tag, formattedLog.message);
      }
    };

    return baseLoggerDecorator;
  };

  return baseLoggerDecoratorCreator;

};
