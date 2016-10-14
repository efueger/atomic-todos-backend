const appFactory = require('../../app');
const db = require('../../app/etc/database');

const app = appFactory();
const request = supertest(app);


describe('End to end: App', () => {

  before(() => db.connect({ url: process.env.ATOMIC_MONGO_TEST_URL }));
  after(() => db.disconnect());

  it('Should fail with a 400 on POST /grocery-lists/ with an empty request body', done => {
    request
      .post('/grocery-lists/')
      .set('Content-Type', 'application/json')
      .send()
      .expect(400, done);
  });

  it('Should fail with a 400 on POST /grocery-lists/ without Content-Type', done => {
    request
      .post('/grocery-lists/')
      .send()
      .expect(400, {
        id: 'BadRequest',
        message: 'Content-Type header is not set for this request'
      }, done);
  });

  it('Should fail with a 400 on POST /grocery-lists/ with null Content-Type', done => {
    request
      .post('/grocery-lists/')
      .set('Content-Type', null)
      .send()
      .expect(400, {
        id: 'BadRequest',
        message: 'Request Content-Type header is invalid. It must be only application/json'
      }, done);
  });

  it('Should respond with 404 on a GET /i-do-not-exist', done => {
    request
      .get('/i-do-not-exist')
      .set('Content-Type', 'application/json')
      .send()
      .expect(404, done);
  });

  it('Should respond with 200 on GET /status', done => {
    request
      .get('/status/')
      .send()
      .expect(200, done);
  });
});
