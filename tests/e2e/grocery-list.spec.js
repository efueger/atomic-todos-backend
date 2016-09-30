'use strict';

const app = require(path.join(process.cwd(), 'app'))();

const request = supertest(app);
const db = require(path.join(process.cwd(), 'etc', 'database'));

describe(chalk.magenta('End to end: Grocery List'), () => {

  before(() => db.connect({ url: process.env.ATOMIC_MONGO_TEST_URL }));
  after(() => db.disconnect());

  it('Should fail with a 400 on POST /grocery-lists/ with an empty array as request body', (done) => {
    request
      .post('/grocery-lists/')
      .set('Content-Type', 'application/json')
      .send([])
      .expect(400, done);
  });

  it('Should respond with 404 on a GET /i-do-not-exist', (done) => {
    request
      .get('/i-do-not-exist')
      .set('Content-Type', 'application/json')
      .expect(404, done);
  });

});
