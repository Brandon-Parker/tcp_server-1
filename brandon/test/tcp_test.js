const chai = require('chai');
const expect = chai.expect;
const tcp = require(__dirname + '/../server');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Testing tcp server', () => {
  after(() => {
    tcp.server.close();
  });
  it('should have a response from the server', (done) => {
    chai.request('http://localhost:3000')
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        done();
      })
      .catch((err) => {
        throw err;
      });
  });
});
