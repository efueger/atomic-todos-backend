const envs = require('../etc/environments');
const env = require('../etc/env');
const DEV = envs.DEV;
const PROD = envs.PROD;

const tag = (text, envs) => ({ text, envs, currentEnv: env.ENV });

module.exports = {
  APP: tag('app', [DEV]),
  DEFAULT: tag('no-tag', [DEV]),
  ERROR: tag('atomic-error', [DEV, PROD]),
  INDEX: tag('index', [DEV]),
  MIDDLEWARE: tag('middleware',[DEV]),
  MONGO: tag('mongo',[DEV]),
  ROUTE: tag('route', [DEV]),
  SETUP: tag('setup', [DEV])
};
