'use strict';

module.exports = (model) => {

  const rootAction = (request, response, next) => {
    response.json({
      hello: 'Grocery lists'
    });
  };

  return rootAction;

};
