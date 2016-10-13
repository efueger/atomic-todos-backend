const http = require('../../../app/etc/http');

describe( 'Unit: Etc: Http', () => {

  it('Should have correct methods constants', done => {
    expect(http.METHODS.GET).to.equal('get');
    expect(http.METHODS.POST).to.equal('post');
    done();
  });

  it('Should have correct status code constants', done => {

    expect(http.STATUS_CODE.BAD_REQUEST).to.equal(400);
    expect(http.STATUS_CODE.NOT_FOUND).to.equal(404);
    expect(http.STATUS_CODE.INTERNAL_SERVER_ERROR).to.equal(500);
    done();

  });

});
