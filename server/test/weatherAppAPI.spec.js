const { expect } = require('chai');
const supertest = require('supertest');
const weatherWebApp = require('../app');

const api = supertest(weatherWebApp);

describe('API Test cases', function() {

  it('Get Weather of a city', function(done) {
    api.get(`/api/v1/weather`)
      .expect(200)
      .end((err, response) => {
        expect(err).to.equal((undefined || null));
        expect(response.body).to.a(typeof {});
        expect(response.body.result).to.not.equal((undefined || null));
        expect(response.body.result.message).to.not.equal((undefined || null));
        expect(response.body.result.message).to.a(typeof "");
        expect(response.body.result.message).to.have.lengthOf.above(1);
        done(null);
      });
  });
})
