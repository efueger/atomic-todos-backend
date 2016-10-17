const tags = require('../../../app/loggers/tags');

describe('Unit: Loggers: Tags', () => {

  it('Should contain expected structure on all tags', done => {

    expect(tags.APP.text).to.exist;
    expect(tags.DEFAULT.text).to.exist;
    expect(tags.ERROR.text).to.exist;
    expect(tags.INDEX.text).to.exist;
    expect(tags.MIDDLEWARE.text).to.exist;
    expect(tags.MONGO.text).to.exist;
    expect(tags.ROUTE.text).to.exist;
    expect(tags.SETUP.text).to.exist;

    expect(tags.APP.envs).to.exist;
    expect(tags.DEFAULT.envs).to.exist;
    expect(tags.ERROR.envs).to.exist;
    expect(tags.INDEX.envs).to.exist;
    expect(tags.MIDDLEWARE.envs).to.exist;
    expect(tags.MONGO.envs).to.exist;
    expect(tags.ROUTE.envs).to.exist;
    expect(tags.SETUP.envs).to.exist;

    expect(tags.APP.currentEnv).to.exist;
    expect(tags.DEFAULT.currentEnv).to.exist;
    expect(tags.ERROR.currentEnv).to.exist;
    expect(tags.INDEX.currentEnv).to.exist;
    expect(tags.MIDDLEWARE.currentEnv).to.exist;
    expect(tags.MONGO.currentEnv).to.exist;
    expect(tags.ROUTE.currentEnv).to.exist;
    expect(tags.SETUP.currentEnv).to.exist;

    done();

  });

  it('Should contain correct data types', done => {

    expect(tags.APP.text).to.be.a('string');
    expect(tags.DEFAULT.text).to.be.a('string');
    expect(tags.ERROR.text).to.be.a('string');
    expect(tags.INDEX.text).to.be.a('string');
    expect(tags.MIDDLEWARE.text).to.be.a('string');
    expect(tags.MONGO.text).to.be.a('string');
    expect(tags.ROUTE.text).to.be.a('string');
    expect(tags.SETUP.text).to.be.a('string');

    expect(tags.APP.envs).to.be.an('array');
    expect(tags.DEFAULT.envs).to.be.an('array');
    expect(tags.ERROR.envs).to.be.an('array');
    expect(tags.INDEX.envs).to.be.an('array');
    expect(tags.MIDDLEWARE.envs).to.be.an('array');
    expect(tags.MONGO.envs).to.be.an('array');
    expect(tags.ROUTE.envs).to.be.an('array');
    expect(tags.SETUP.envs).to.be.an('array');

    expect(tags.APP.currentEnv).to.be.a('string');
    expect(tags.DEFAULT.currentEnv).to.be.a('string');
    expect(tags.ERROR.currentEnv).to.be.a('string');
    expect(tags.INDEX.currentEnv).to.be.a('string');
    expect(tags.MIDDLEWARE.currentEnv).to.be.a('string');
    expect(tags.MONGO.currentEnv).to.be.a('string');
    expect(tags.ROUTE.currentEnv).to.be.a('string');
    expect(tags.SETUP.currentEnv).to.be.a('string');

    done();

  });

  it('Should contain expected values', done => {

    expect(tags.APP).to.have.property('text', 'app');
    expect(tags.APP.envs).to.deep.equal(['dev']);

    expect(tags.DEFAULT).to.have.property('text', 'no-tag');
    expect(tags.DEFAULT.envs).to.deep.equal(['dev']);

    expect(tags.ERROR).to.have.property('text', 'atomic-error');
    expect(tags.ERROR.envs).to.deep.equal(['dev', 'prod']);

    expect(tags.INDEX).to.have.property('text', 'index');
    expect(tags.INDEX.envs).to.deep.equal(['dev']);

    expect(tags.MIDDLEWARE).to.have.property('text', 'middleware');
    expect(tags.MIDDLEWARE.envs).to.deep.equal(['dev']);

    expect(tags.MONGO).to.have.property('text', 'mongo');
    expect(tags.MONGO.envs).to.deep.equal(['dev']);

    expect(tags.ROUTE).to.have.property('text', 'route');
    expect(tags.ROUTE.envs).to.deep.equal(['dev']);

    expect(tags.SETUP).to.have.property('text', 'setup');
    expect(tags.SETUP.envs).to.deep.equal(['dev']);

    done();
  });

});
