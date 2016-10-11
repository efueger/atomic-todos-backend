const GroceryListCreateAction = require('./grocery-list-create');
const StatusAction = require('./status');
const methods = require('./base-action').METHODS;

module.exports = [
  { Constructor: GroceryListCreateAction, method: methods.POST, endpoint: '/grocery-lists' },
  { Constructor: StatusAction, method: methods.GET, endpoint: '/status' }
];
