'use strict';

const path = require('path');

const pathForAction = (actionName) => path.join(process.cwd(), 'actions', 'grocery-list', actionName);

const createActionFactory = require(pathForAction('create'));
const Router = require('express').Router;

module.exports = (app) => {

  const router = Router();

  router.post('/', createActionFactory(app));

  return {
    prefix: '/grocery-lists',
    router: router
  };
};
