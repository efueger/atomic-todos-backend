'use strict';

module.exports = (model) => {

  const createAction = (request, response, next) => {
    response.json({
      postResponse:'Hello'
    });
  };

  return createAction;
}
