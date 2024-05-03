import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the subtraction of rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if the divisor is 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
