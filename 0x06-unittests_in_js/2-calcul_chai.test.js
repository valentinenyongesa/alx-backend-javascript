import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two numbers', function() {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the subtraction of two numbers', function() {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of two numbers', function() {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    });

    it('should return "Error" if the divisor is 0', function() {
      expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
    });
  });
});
