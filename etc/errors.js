'use strict';

const BASE_ERROR = (id, status, cause, message) => {

  return {
    id: id,
    status: status,
    cause: cause,
    message: message
  }

};


module.exports = {

  BAD_REQUEST: (cause, message) => BASE_ERROR('BadRequest', 400, cause, message),
  INTERNAL_ERROR: (cause, message) => BASE_ERROR('InternalError', 500, cause, message),
  DATABASE_ERROR: (cause, message) => BASE_ERROR('DatabaseError', 500, cause, message)

};
