// 3-payment.test.js
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi function', () => {
    it('should call Utils.calculateNumber with correct arguments and log the result', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;

        calculateNumberSpy.restore();
        consoleLogSpy.restore();
    });
});
