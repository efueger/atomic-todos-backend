const appFactory = require('./app');
const loggers = require('./app/loggers');
const db = require('./app/etc/database');
const env = require('./app/etc/env');
const logger = loggers.consoleLogger(loggers.tags.INDEX);
const app = appFactory();

db.connect({ url: env.DATABASE_URL });

app.listen(env.PORT, () => logger.info(`Up on port: ${env.PORT}`));
