const express = require('express');
const server = express();
const path = require('path');

// Import your Express app
const app = require('../server/index');

// Route all requests to the Express app
server.use('/', app);

// Export the serverless function
exports.handler = server;