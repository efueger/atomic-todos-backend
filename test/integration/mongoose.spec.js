'use strict';

const mongoose = require('mongoose');
const db = require('../../app/etc/database');

describe('Integration: Mongoose', () => {

  const IntegrationTestDocument = mongoose.model('IntegrationTestDocument', {
    test: String
  });

  it('Should fail to connect when no url is specified', done => {
    const config = { url: null };

    expect(() => db.connect(config)).to.throw('Database connection url is not set on this environment.');
    done();
  });

  it('Should connect to a mongo database', done => {
    const config = {
      url: process.env.ATOMIC_MONGO_TEST_URL,
      onConnect: done,
      onError: done
    };
    db.connect(config);
  });

  it('Should save an object in a mongo database', done => {

    const testDocument = new IntegrationTestDocument({ test: 'Testing' });

    testDocument.save(function(error) {
      return error ? done(error) : done();
    });

  });

  it('Should retrieve an object from the database', done => {

    IntegrationTestDocument.findOne({test:'Testing'}, (error, doc) => {

      if (error) {
        return done(error);
      }

      expect(doc).to.have.property('test').and.equal('Testing');
      done();
    });

  });

  it('Should disconnect from mongo db', done => {
    db.disconnect();
    done();
  });

});
