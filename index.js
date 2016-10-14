const appFactory = require('./app');
const loggers = require('./app/loggers');
const db = require('./app/etc/database');

const logger = loggers.consoleLogger(loggers.tags.INDEX);
const port = process.env.PORT || 3000;
const app = appFactory();

db.connect({
  url: process.env.ATOMIC_MONGO_URL,
  onDisconnect() {
    logger.error('disconnected from Mongo');
  }
});

app.listen(port, () => logger.info(`Up on port: ${port}`));
