const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  describe('/GET users', () => {
    it('it should GET all the users', (done) => {
      chai.request(server)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          // 여기에 더 많은 단언문을 추가할 수 있습니다.
          done();
        });
    });
  });
});
