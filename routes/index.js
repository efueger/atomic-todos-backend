const path = require('path');

const groceryStoreList = require(path.join(process.cwd(), 'models', 'grocery-store-list'));

module.exports = [
  {
    prefix: '/',
    router: require('./main')()
  },
  {
    prefix: '/grocery-lists',
    router: require('./grocery-list')(groceryStoreList)
  }
];
