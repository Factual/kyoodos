var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server');
var should = chai.should();

chai.use(chaiHttp);

describe('api', function() {
  it('should list ALL kyoodos on /api/kyoodos GET', function(done) {
    chai.request(server)
      .get('/api/kyoodos')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('should list LAST CREATED kyoodo on /api/kyoodo/lastCreated GET', function(done) {
    chai.request(server)
      .get('/api/kyoodos/lastCreated')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('should list a SINGLE user on /api/users/:id GET', function(done) {
    chai.request(server)
      .get('/api/users/U1ES7212Q')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
});
