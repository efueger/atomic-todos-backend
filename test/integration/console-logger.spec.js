
'use strict';

const loggerBuilder = require('../../app/loggers/console-logger');
const stdout = require('test-console').stdout;

describe('Integration: ConsoleLogger', () => {

  const logger = loggerBuilder({ text: 'test', envs:['test'], currentEnv: 'test' });

  it('Should have the tag [TEST]', done => {

    const output = stdout.inspectSync( () => {
      logger.info('a log');
    });

    expect(output[0]).to.have.entriesCount('[TEST]', 1);
    done();
  });

  it('Should have the type \'info:\' ', done => {

    const output = stdout.inspectSync( () => {
      logger.info('a log');
    });

    expect(output[0]).to.have.entriesCount('info:', 1);

    done();
  });

  it('Should contain the \'a log\' logged message', done => {

    const output = stdout.inspectSync( () => {
      logger.info('a log');
    });

    expect(output[0]).to.have.entriesCount('a log', 1);
    done();

  });

});
