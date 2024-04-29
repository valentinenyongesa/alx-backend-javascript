// 6-http_express.js

const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define a default route handler for all other paths
app.use((req, res) => {
  res.status(404).send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ' + req.url + '</pre></body></html>');
});

// Set the server to listen on port 1245
const server = app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

// Export the app variable
module.exports = app;
