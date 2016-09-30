'use strict';

const notFoundErrorHandler = require(path.join(process.cwd(), 'middlewares', 'not-found-handler'));

describe(chalk.magenta('Unit: Middleware: Not Found Handler'), () => {

  it('Should respond with 404', (done) => {

    const request = {};
    const response = {send: sinon.stub()};

    notFoundErrorHandler(request, response);

    expect(response.send).to.have.been.called;
    done();

  });

});
