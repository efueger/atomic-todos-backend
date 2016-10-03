const baseLogger = {

  info(winston, tag, message) {
    if (message && (!process.env.DISABLE_LOGS)) {
      winston.info(tag, message);
    }
  },

  error(winston, tag, message) {
    if (message && (!process.env.DISABLE_LOGS)) {
      winston.error(tag, message);
    }
  },

};

module.exports = (config) => {
  if (!config.winston) {
    throw new Error('Failed to create a new logger: No winston specified on its config object.');
  }

  const baseLoggerDecoratorCreator = (tag) => {
    const format = (tagToFormat, message) =>
    ({
      tag: (config.tagFormatter) ? config.tagFormatter(tagToFormat) : tag,
      message: (config.messageFormatter && message) ? config.messageFormatter(message) : message,
    });

    const baseLoggerDecorator = {
      info(message) {
        const formattedLog = format(tag, message);
        baseLogger.info(config.winston, formattedLog.tag, formattedLog.message);
      },
      error(message) {
        const formattedLog = format(tag, message);
        baseLogger.error(config.winston, formattedLog.tag, formattedLog.message);
      },
    };

    return baseLoggerDecorator;
  };

  return baseLoggerDecoratorCreator;
};
