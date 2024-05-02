const http = require('http');

// Create HTTP server
const app = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength('Hello Holberton School!'),
  });

  // Send response without newline character
  res.end('Hello Holberton School!');
});

// Start server listening on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
