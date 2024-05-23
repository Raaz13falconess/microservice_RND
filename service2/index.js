// product-service/server.js

const express = require('express');
const app = express();

const PORT = 6000;

app.use(express.json());

app.post('/uppercase', (req, res) => {
  try {
    const { string } = req.body;
    const uppercaseString = string.toUpperCase();
    res.json(uppercaseString);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
