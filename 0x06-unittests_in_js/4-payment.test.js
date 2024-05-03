// 4-payment.test.js
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi function', () => {
    it('should call Utils.calculateNumber with correct arguments and log the result', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
