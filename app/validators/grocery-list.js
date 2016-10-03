const exists = require('exists');

module.exports = {

  create(request) {
    if (!exists(request.body)) {
      return new Error('Request body is empty');
    }

    if (!(request.body instanceof Array)) {
      return new Error('Request body is not an array');
    }

    return null;
  },

};
