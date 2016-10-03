const createActionFactory = require('../actions/grocery-list/create');

const Router = require('express').Router;

module.exports = (app) => {
  const router = new Router();

  router.post('/', createActionFactory(app));

  return {
    prefix: '/grocery-lists',
    router,
  };
};
