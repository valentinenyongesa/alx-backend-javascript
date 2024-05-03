const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
    describe('type SUM', () => {
        it('should return the rounded sum of two numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('type SUBTRACT', () => {
        it('should return the rounded subtraction of two numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('type DIVIDE', () => {
        it('should return the rounded division of two numbers', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when trying to divide by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('invalid type', () => {
        it('should throw an error for an invalid type', () => {
            expect(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }).to.throw(Error);
        });
    });
});
