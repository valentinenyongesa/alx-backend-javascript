// 7-http_express.js

const express = require('express');
const { countStudents } = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the /students path
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  countStudents(databasePath)
    .then((data) => {
      res.send(`
                This is the list of our students<br>
                ${data}
            `);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

// Export the Express application
module.exports = app;
