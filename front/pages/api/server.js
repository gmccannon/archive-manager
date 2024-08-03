import express, { json } from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.post('/compressor', (req, res) => {
  res.send('Hello from Express compress!');
});

app.post('/decompressor', (req, res) => {
  res.send('Hello from Express decompress!');
});

export const handler = serverless(app);
