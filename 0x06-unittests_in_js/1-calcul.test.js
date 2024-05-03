const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
    describe('type SUM', () => {
        it('should return the rounded sum of two numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('type SUBTRACT', () => {
        it('should return the rounded subtraction of two numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('type DIVIDE', () => {
        it('should return the rounded division of two numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when trying to divide by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('invalid type', () => {
        it('should throw an error for an invalid type', () => {
            assert.throws(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }, Error);
        });
    });
});
