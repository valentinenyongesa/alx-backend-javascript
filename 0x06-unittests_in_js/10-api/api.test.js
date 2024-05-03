// 10-api/api.test.js
const request = require('request');
const expect = require('chai').expect;

describe('Login endpoint', () => {
    let server;

    before((done) => {
        server = require('./api');
        done();
    });

    after((done) => {
        server.close();
        done();
    });

    it('should return correct message when userName is provided in the body', (done) => {
        const options = {
            method: 'POST',
            url: 'http://localhost:7865/login',
            headers: {
                'Content-Type': 'application/json'
            },
            json: {
                userName: 'Betty'
            }
        };
        request(options, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});

describe('Available payments endpoint', () => {
    let server;

    before((done) => {
        server = require('./api');
        done();
    });

    after((done) => {
        server.close();
        done();
    });

    it('should return correct object structure', (done) => {
        request.get('http://localhost:7865/available_payments', (error, response, body) => {
            const expected = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            const result = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(result).to.deep.equal(expected);
            done();
        });
    });
});
