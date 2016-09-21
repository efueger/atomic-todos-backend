'use strict';

module.exports = (request, response, next) => {

    response.json({
      hello: 'Grocery lists'
    });

    next();
};
