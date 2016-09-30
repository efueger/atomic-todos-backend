'use strict';

module.exports = (error, request, response, next) => {
  if (error.status && error.message) {
    return response.status(error.status).json({message: error.message});
  }

  return response.status(500).json({message: 'Internal Generic Error'});

};
