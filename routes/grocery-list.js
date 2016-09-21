'use strict';

const path = require('path');

const pathForAction = (actionName) => path.join(process.cwd(), 'actions', 'grocery-list', actionName);

const rootAction = require(pathForAction('root'));
const createAction = require(pathForAction('create'));
const Router = require('express').Router;

module.exports = (GroceryStoreList, routerConfig) => {

  routerConfig = routerConfig || require(path.join(process.cwd(), 'etc', 'config')).routerConfig;

  const router = Router(routerConfig);
  const context = { GroceryStoreList: GroceryStoreList };

  router.get('/', rootAction.bind(context));
  router.post('/', createAction.bind(context));

  return router;
};