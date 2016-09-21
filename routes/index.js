const path = require('path');

const GroceryStoreList = require(path.join(process.cwd(), 'models', 'grocery-store-list'));

module.exports = [
  {
    prefix: '/',
    router: require('./main')()
  },
  {
    prefix: '/grocery-lists',
    router: require('./grocery-list')(GroceryStoreList)
  }
];
