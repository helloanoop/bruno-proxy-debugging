const endpoint = 'https://testbench-sanity.usebruno.com/ping';
const axios = require('axios');

async function ping() {
  const response = await axios.get(endpoint);
  return response.data;
}

ping().then(console.log);
