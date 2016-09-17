'use strict';
const path = require('path');

module.exports = (routerConfig) => {

  routerConfig = routerConfig || require('../etc/config').routerConfig;

  const router = require('express').Router(routerConfig);

  router.get('/', (request, response, next) => response.json({
    hello:"I am working"
  }));

  return router;
};
