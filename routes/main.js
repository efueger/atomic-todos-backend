'use strict';
const path = require('path');
const routerConfig = require('../etc/config').routerConfig;

const router = require('express').Router(routerConfig);

router.get('/', (request, response, next) => response.json({
  hello:"I am working"
}));

module.exports = router;
