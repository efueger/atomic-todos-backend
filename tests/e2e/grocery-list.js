'use strict';

const app = require(path.join(process.cwd(), 'app'))();

const request = supertest(app);

describe(chalk.magenta('End to end: Grocery List'), () => {

  it('Should create a new GroceryList on POST /grocery-lists/', (done) => {

    request
      .post('/grocery-lists/')
      .send([])
      .expect(201, done);

  });

});
