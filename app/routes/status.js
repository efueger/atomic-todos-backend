const Router = require('express').Router;
const statusAction = require('../actions/status.js');

module.exports = () => {

  const router = new Router();

  router.get('/', statusAction);

  return {
    prefix: '/status',
    router
  };

};
