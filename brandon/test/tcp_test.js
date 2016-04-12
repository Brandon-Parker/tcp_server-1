const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const tcp = require(__dirname + '/../server');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Testing tcp server', () => {
  it('should have a response from the server', (done) => {
    chai.request('http://localhost:3000')
    .get('/')
    .then(function (res) {
      expect(res).to.have.status(200);
      done();
    })
    .catch(function (err) {
      throw err;
      done();
    })
  })
})
