'use strict';

const path = require('path');

const pathForAction = (actionName) => path.join(process.cwd(), 'actions', 'grocery-list', actionName);
const routerConfig = require(path.join(process.cwd(), 'etc', 'config')).routerConfig;

const rootAction = require(pathForAction('root'));
const createAction = require(pathForAction('create'));
const Router = require('express').Router;

module.exports = (GroceryStoreList) => {

  const router = Router(routerConfig);
  const routerContext = { GroceryStoreList: GroceryStoreList };

  router.get('/', rootAction.bind(routerContext));
  router.post('/', createAction.bind(routerContext));

  return router;
};
