const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.get('/api/secret', (req, res) => {
  const secretKey = process.env.MY_SECRET_KEY;
  res.json({ secretKey });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
