// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Your asynchronous API call or any asynchronous operation here
    // For example, a setTimeout to simulate an asynchronous operation
    setTimeout(() => {
      const isSuccess = true; // Change it based on your API response or condition

      if (isSuccess) {
        // If the operation is successful, resolve the Promise
        resolve('API response data');
      } else {
        // If there is an error, reject the Promise
        reject(new Error('API request failed'));
      }
    }, 1000); // Simulating a delay of 1 second, adjust as needed
  });
}
