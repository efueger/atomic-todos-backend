
const baseError = (id, status, cause, message) => ({ status, cause, body: { id, message: message || cause.message } });
const sanitize = cause => cause || new Error('No Cause');
const status = require('./http').STATUS_CODE;

module.exports = {

  badRequest: (cause, message) => baseError('BadRequest', status.BAD_REQUEST, sanitize(cause), message),
  internalError: (cause, message) => baseError('InternalError', status.INTERNAL_SERVER_ERROR, sanitize(cause), message),
  databaseError: (cause, message) => baseError('DatabaseError', status.INTERNAL_SERVER_ERROR, sanitize(cause), message)

};
