const mongoose = require('mongoose');

const MONGO_STATUS = {
  DISCONNECTED: 0,
  CONNECTED: 1,
  CONNECTING: 2,
  DISCONNECTING: 3
};

module.exports = {
  preSave: next => (mongoose.connection.readyState !== MONGO_STATUS.CONNECTED) ? next(new Error('The application was not connected to the database')) : next()
};
