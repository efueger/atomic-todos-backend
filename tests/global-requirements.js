const path = require('path');
const chai = require('chai');
const chaiString = require('chai-string');
const chalk = require('chalk');
const sinon = require('sinon');
const sinonAsPromised = require('sinon-as-promised');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.use(chaiString);

global.expect = chai.expect;
global.assert = chai.assert;
global.sinon = sinon;
global.path = path;
global.chalk = chalk;
global.chai = chai;
