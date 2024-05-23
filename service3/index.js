// order-service/server.js

const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.json());

app.post('/lowercase', (req, res) => {
  try {
    const { string } = req.body;
    const lowercaseString = string.toLowerCase();
    res.json(lowercaseString);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
