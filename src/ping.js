const endpoint = 'https://httpbin.org/get';
const axios = require('axios');

async function ping() {
  const response = await axios.get(endpoint);
  return response.data;
}

ping().then(console.log);
