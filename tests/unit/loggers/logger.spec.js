const chalk = require('chalk');
const chai = require('chai');
const path = require('path');
const loggerBuilder = require(path.join(process.cwd(), 'loggers', 'logger'));

const assert = chai.assert;

describe(chalk.magenta('Unit: Logger'), () => {

  it.skip('Should have the tag [TEST]', (done) => {
    const logger = loggerBuilder('test');

    logger.info('a log');
    logger.error('a log');

    process.stdout.on('data', (data) => {
      console.log(`Data: ${data}`);
      output.end();
      done();
    });

  });

});
