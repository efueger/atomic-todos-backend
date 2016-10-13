'use strict';

const Action = require('./base-action');

class StatusAction extends Action{

  handle(request, response, next) {
    response.json({ ok: true });
  }

}

module.exports = StatusAction;
