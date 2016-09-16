
'use strict';

const chalk = require('chalk');
const chai = require('chai');
const chaiString = require('chai-string');
const path = require('path');
const loggerBuilder = require(path.join(process.cwd(), 'loggers', 'logger'));
const stdout = require('test-console').stdout;
const assert = chai.assert;
const expect = chai.expect;
chai.use(chaiString);

describe(chalk.magenta('Unit: Logger'), () => {

  const logger = loggerBuilder('test');

  it('Should have the tag [TEST]', (done) => {

    const output = stdout.inspectSync( () => {
      logger.info('a log');
    });

    expect(output[0]).to.have.entriesCount("[TEST]", 1);
    done();
  });

  it('Should have the type \'info:\' ', (done) => {

    const output = stdout.inspectSync( () => {
      logger.info('a log');
    });

    expect(output[0]).to.have.entriesCount("info:", 1);

    done();
  });

  it('Should log the [TEST] tag using the magenta color', (done) => {

    const output = stdout.inspectSync( () => {
      logger.info('a log');
    });

    expect(output[0]).to.have.entriesCount("\u001b[35m[TEST]\u001b[39m", 1);
    done();
  });

  it('Should contain the \'a log\' logged message', (done) => {

    const output = stdout.inspectSync( () => {
      logger.info('a log');
    });

    expect(output[0]).to.have.entriesCount("a log", 1);
    done();

  });

});
