'use strict';

module.exports = (error, request, response, next) => {

  if (error.status) {
    return response.status(error.status).json(error.body);
  }

  return response.status(500).json({message: 'Internal Generic Error'});

};
