const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments and log the result', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
