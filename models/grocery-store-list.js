'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('grocery_store_list', {
  date: Date,
  finished: Boolean,
  items: Array
});
