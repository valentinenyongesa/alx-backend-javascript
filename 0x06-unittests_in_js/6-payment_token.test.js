// 6-payment_token.test.js
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI function', () => {
    it('should return a resolved promise with data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((result) => {
            expect(result).to.deep.equal({ data: 'Successful response from the API' });
            done(); // Call done to indicate the end of the async test
        }).catch((error) => {
            done(error); // Call done with an error if the promise is rejected
        });
    });

    // Add more test cases as needed...
});
