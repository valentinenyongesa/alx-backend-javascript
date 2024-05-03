// 9-api/api.test.js
const request = require('request');
const expect = require('chai').expect;

describe('Cart page', () => {
    let server;

    before((done) => {
        server = require('./api');
        done();
    });

    after((done) => {
        server.close();
        done();
    });

    it('should return correct status code when :id is a number', (done) => {
        request.get('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct status code when :id is NOT a number (=> 404)', (done) => {
        request.get('http://localhost:7865/cart/hello', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    // Add more tests as needed...
});
