export default function appendToEachArrayValue(array, appendString) {
  return array.map(value => appendString + value);
}

// Example usage:
const originalArray = ['appended', 'fixed', 'displayed'];
const resultArray = appendToEachArrayValue(originalArray, 'correctly-');
console.log(resultArray);  // Output: [ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
