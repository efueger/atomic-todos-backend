const mongoose = require('mongoose');

module.exports = mongoose.model('grocery_list', {
  date: Date,
  finished: Boolean,
  items: Array
});
