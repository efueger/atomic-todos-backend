
const baseError = (id, status, cause, message) => {
  const sanitizedMessage = (!message && !cause) ? message = 'Internal Error' : (!message && cause) ? cause.message : message;

  return { status, body: { id, cause, message: sanitizedMessage } };
};


module.exports = {

  badRequest: (cause, message) => baseError('BadRequest', 400, cause, message),
  internalError: (cause, message) => baseError('InternalError', 500, cause, message),
  databaseError: (cause, message) => baseError('DatabaseError', 500, cause, message)

};
