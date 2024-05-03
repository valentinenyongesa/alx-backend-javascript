// utils.js

const Utils = {
  calculateNumber(type, a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (type === 'SUM') {
      return Math.round(numA) + Math.round(numB);
    } else if (type === 'SUBTRACT') {
      return Math.round(numA) - Math.round(numB);
    } else if (type === 'DIVIDE') {
      if (Math.round(numB) === 0) return 'Error';
      return Math.round(numA) / Math.round(numB);
    }
  }
};

export default Utils;
