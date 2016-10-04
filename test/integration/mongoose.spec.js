'use strict';
const path = require('path');
const chalk = require('chalk');
const mongoose = require('mongoose');

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const db = require(path.join(process.cwd(), 'app', 'etc', 'database'));

describe(chalk.magenta('Integration: Mongoose'), () => {

  const IntegrationTestDocument = mongoose.model('IntegrationTestDocument', {
    test: String
  });

  it('Should connect to a mongo database', (done) => {
    const config = {
      url: process.env.ATOMIC_MONGO_TEST_URL,
      onConnect: done,
      onError: done
    };
    db.connect(config);
  });

  it('Should save an object in a mongo database', (done) => {

    const testDocument = new IntegrationTestDocument({ test: 'Testing' });

    testDocument.save(function(error) {
      return error ? done(error) : done();
    });

  });

  it('Should retrieve an object from the database', (done) => {

    IntegrationTestDocument.findOne({test:'Testing'}, (error, doc) => {

      if (error) {
        return done(error);
      }

      expect(doc).to.have.property('test').and.equal('Testing');
      done();
    });

  });

  it('Should disconnect from mongo db', (done) => {
    db.disconnect();
    done();
  });

});
