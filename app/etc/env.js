module.exports = {
  ENV: process.env.NODE_ENV || 'dev',
  DATABASE_URL: process.env.ATOMIC_MONGO_URL,
  TEST_DATABASE_URL: process.env.ATOMIC_TEST_MONGO_URL
};
