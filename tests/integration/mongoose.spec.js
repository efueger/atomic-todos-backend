'use strict';
const path = require('path');
const chalk = require('chalk');
const mongoose = require('mongoose');

require(path.join(process.cwd(), 'models', 'db-connection'));

describe(chalk.magenta('Integration: Mongoose'), () => {

  it('Should save an object in a mongo database', (done) => {

    const IntegrationTestDocument = mongoose.model('IntegrationTestDocument', {
      test: String
    });

    const testDocument = new IntegrationTestDocument({ test: 'Testing' });

    testDocument.save(function(error) {
      return error ? done(error) : done();
    });

  });

});
