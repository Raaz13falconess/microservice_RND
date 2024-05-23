// user-service/server.js

const express = require('express');
const app = express();
const axios = require('axios');

const PORT = 3000;

const temp_variable = 3;
console.log(temp_variable);

app.get('/', async (req, res) => {
  try {
    const randomString = generateRandomString();
    const uppercaseString = await axios.post('http://product-service/uppercase', { string: randomString });
    const lowercaseString = await axios.post('http://order-service/lowercase', { string: randomString });

    res.json({
      randomString,
      uppercaseString: uppercaseString.data,
      lowercaseString: lowercaseString.data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

function generateRandomString() {
  const length = 10;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
