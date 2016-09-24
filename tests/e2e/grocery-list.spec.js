'use strict';

const app = require(path.join(process.cwd(), 'app'))();

const request = supertest(app);
const db = require(path.join(process.cwd(), 'etc', 'database'));

describe(chalk.magenta('End to end: Grocery List'), () => {

  before(() => db.connect({ url: process.env.ATOMIC_MONGO_TEST_URL }));
  after(() => db.disconnect());

  it('Should create a new GroceryList on POST /grocery-lists/', (done) => {

    request
      .post('/grocery-lists/')
      .send([])
      .expect(201, done);

  });

});
