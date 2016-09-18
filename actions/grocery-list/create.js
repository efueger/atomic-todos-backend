'use strict';

module.exports = (model, validator) => {

  const createAction = (request, response, next) => {
    response.json({
      postResponse:'Hello'
    });
  };

  return createAction;
}
