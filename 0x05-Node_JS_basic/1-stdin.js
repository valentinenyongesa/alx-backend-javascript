// 1-stdin.js

console.log('Welcome to Holberton School, what is your name?');

// Event listener for user input
process.stdin.on('data', (data) => {
  // Convert input data to string and remove trailing newline characters
  const input = data.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${input}`);

  // Close the program
  console.log('This important software is now closing');
  process.exit();
});
