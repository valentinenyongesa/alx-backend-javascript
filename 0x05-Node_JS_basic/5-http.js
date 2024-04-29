// 5-http.js

const http = require('http');
const { countStudents } = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Parse the URL path
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  // Handle different routes
  if (path === '/') {
    // Send "Hello Holberton School!" for the root path
    res.end('Hello Holberton School!\n');
  } else if (path === '/students') {
    // Read the database file asynchronously and send the result for the /students path
    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
    // Return a 404 Not Found error for other paths
    res.statusCode = 404;
    res.end('404 Not Found\n');
  }
});

// Set the server to listen on port 1245
app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

// Export the app variable
module.exports = app;
