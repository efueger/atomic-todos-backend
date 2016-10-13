const NOT_FOUND = require('../etc/http').STATUS_CODE.NOT_FOUND;

module.exports = (request, response) => {
  response.set('Content-Type', 'application/json');
  response.sendStatus(NOT_FOUND);
};
