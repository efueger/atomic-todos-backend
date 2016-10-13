const INTERNAL_SERVER_ERROR = require('../etc/http').STATUS_CODE.INTERNAL_SERVER_ERROR;

module.exports = (error, request, response, next) => {

  if (error.status) {
    return response.status(error.status).json(error.body);
  }

  return response.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Generic Error' });
};
