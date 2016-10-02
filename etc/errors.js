'use strict';

const BASE_ERROR = (id, status, cause, message) => {
  if (!message && !cause) {
    message = 'Internal Error';
  } else if (!message && cause) {
    message = cause.message;
  }

  return { status, body: { id, cause, message } };
};


module.exports = {

  BAD_REQUEST: (cause, message) => BASE_ERROR('BadRequest', 400, cause, message),
  INTERNAL_ERROR: (cause, message) => BASE_ERROR('InternalError', 500, cause, message),
  DATABASE_ERROR: (cause, message) => BASE_ERROR('DatabaseError', 500, cause, message)

};
