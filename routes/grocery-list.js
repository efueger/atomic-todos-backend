'use strict';

const path = require('path');

const pathForAction = (actionName) => path.join(process.cwd(), 'actions', 'grocery-list', actionName);

const rootAction = require(pathForAction('root'))();
const createAction = require(pathForAction('create'))();
const Router = require('express').Router;

module.exports = (groceryStoreList, routerConfig) => {

  routerConfig = routerConfig || require(path.join(process.cwd(), 'etc', 'config')).routerConfig;

  const router = Router(routerConfig);

  router.get('/', new RootAction(groceryStoreList).apply);
  router.post('/', new CreateAction(groceryStoreList).apply);

  return router;
};
