// 6-http_express.js

const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for other paths
app.use((req, res) => {
  res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Error</title>
        </head>
        <body>
            <pre>Cannot GET ${req.url}</pre>
        </body>
        </html>
    `);
});

// Start the server and listen on port 1245
const server = app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

// Use the server variable somewhere in your code
console.log('Express server:', server);

// Export the Express application
module.exports = app;
