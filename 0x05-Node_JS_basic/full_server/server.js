// full_server/server.js

import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

// Set the port
const port = 1245;

// Set the path to the database file
const databasePath = process.argv[2];

// Pass the database path to the request object
app.use((req, res, next) => {
  req.databasePath = databasePath;
  next();
});

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Error handling for internal server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

// Export the app instance
export default app;
