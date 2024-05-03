// 5-payment.test.js
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi function', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('should log correct message and be called once for totalAmount 100 and totalShipping 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log correct message and be called once for totalAmount 10 and totalShipping 10', () => {
        sendPaymentRequestToApi(10, 10);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    });
});
