
'use strict';

const path = require('path');
const load = require(path.join(process.cwd(), 'utils', 'loader'));

describe('..::: Route Loader Specs', () =>{

  it('Should load the specified file', (done) => {

    let destination = {};

    destination = load('tests/_resources/fake-routes').into(destination);

    done(Error('Not implemented'));
  });

});
