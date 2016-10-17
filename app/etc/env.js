
const envs = require('./environments');

module.exports = {
  ENV: process.env.NODE_ENV || envs.DEV,
  DATABASE_URL: process.env.ATOMIC_MONGO_URL,
  PORT: process.env.PORT || 3000,
  TEST_DATABASE_URL: process.env.ATOMIC_TEST_MONGO_URL
};
