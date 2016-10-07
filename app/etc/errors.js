
const baseError = (id, status, cause, message) => ({ status, body: { id, cause, message: message || cause.message } });
const sanitize = cause => cause || new Error('No Cause');

module.exports = {

  badRequest: (cause, message) => baseError('BadRequest', 400, sanitize(cause), message),
  internalError: (cause, message) => baseError('InternalError', 500, sanitize(cause), message),
  databaseError: (cause, message) => baseError('DatabaseError', 500, sanitize(cause), message)

};
