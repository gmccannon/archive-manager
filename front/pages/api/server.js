const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json()); // Corrected the call to `json()`
app.use(cors());

app.post('/compressor', (req, res) => {
  res.send('Hello from Express compress!');
});

app.post('/decompressor', (req, res) => {
  res.send('Hello from Express decompress!');
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Export the handler function using CommonJS syntax
module.exports.handler = serverless(app);
