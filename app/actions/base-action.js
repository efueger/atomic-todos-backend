
'use strict';

const METHODS = {
  GET: 'get',
  POST: 'post'
};

class Action {

  constructor(app) {
    this.app = app;
  }

  register(endpoint, method) {
    this.app[method](endpoint, this.handle.bind(this));
  }

}

module.exports = { Action, METHODS };
