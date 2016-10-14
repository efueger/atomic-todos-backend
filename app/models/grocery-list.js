const mongoose = require('mongoose');
const hooks = require('./hooks');

const GroceryListSchema = mongoose.Schema({
  date: Date,
  finished: Boolean,
  items: Array
});

GroceryListSchema.pre('save', hooks.preSave);

module.exports = mongoose.model('grocery_list', GroceryListSchema);
