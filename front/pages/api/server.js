const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.post('/compressor', (req, res) => {
    res.send('Hello from Express compress!');
  });

app.post('/decompressor', (req, res) => {
    res.send('Hello from Express decompress!');
});

module.exports.handler = serverless(app);
