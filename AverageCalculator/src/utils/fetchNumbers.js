const axios = require('axios');

const fetchNumbers = async (numberid, token) => {
  try {
    const apiEndpoints = {
      p: 'http://20.244.56.144/evaluation-service/primes',
      f: 'http://20.244.56.144/evaluation-service/fibo',
      e: 'http://20.244.56.144/evaluation-service/even',
      r: 'http://20.244.56.144/evaluation-service/rand',
    };

    const url = apiEndpoints[numberid];
    if (!url) {
      throw new Error('Invalid number ID.');
    }

    // Make the API request with the token
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });

    return response.data.numbers;
  } catch (error) {
    console.error('Error fetching numbers:', error.message);
    throw new Error('Failed to fetch numbers from the API.');
  }
};

module.exports = { fetchNumbers };
