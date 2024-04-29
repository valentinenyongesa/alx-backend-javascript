// 1-stdin.js

// Display initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  // Extract the input (remove trailing newline character)
  const input = data.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${input}`);
});

// Listen for the end of input (user ends the program)
process.stdin.on('end', () => {
  // Display closing message
  console.log('This important software is now closing');
});
