// 8-api/api.test.js
const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
    let server;

    before((done) => {
        server = require('./api');
        done();
    });

    after((done) => {
        server.close();
        done();
    });

    it('should return correct status code', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct result', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    // Add more tests as needed...
});
