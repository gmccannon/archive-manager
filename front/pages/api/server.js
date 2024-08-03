const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/compressor', (req, res) => {
  res.send('Hello from Express compress!');
});

app.post('/decompressor', (req, res) => {
  res.send('Hello from Express decompress!');
});

module.exports.handler = serverless(app);
