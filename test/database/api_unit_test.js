// var app = require('../../app');
var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3000');

describe('Authentication', function() {

  it('should return a 200 response', function(done) {
    api.get('/')
      .set('Accept', 'application/json')
      .expect(200, done)
  });

  it('should return an object with user info', function(done) {
    api.get('/getFeed')
      .set('Accept', 'application/json')
      .expect(200)
      .end( function(err, res) {
        expect(res.body[0]).to.include.keys('country', 'city', 'link', 'caption', 'userId', 'categoryId', 'rating', 'created_at', 'updated_at')
        expect(res.body).to.exist
        expect(res.body).to.have.lengthOf(4)
        done();
      });
  });

  it('should error if not logged in', function(done) {
    api.get('/getUserPhotos')
      .set('Accept', 'application/json')
      .expect(404)
      .end( function(err, res) {
        expect(res.error.text).to.contain('Not Found')
        done()
      });
  });
});
