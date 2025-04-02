const { fetchNumbers } = require('../utils/fetchNumbers');
const { updateWindow, calculateAverage } = require('../services/numberService');

let numberWindow = []; // Sliding window to store numbers
const WINDOW_SIZE = 10;

const getNumbers = async (req, res) => {
  const { numberid } = req.params;

  // Validate numberid
  if (!['p', 'f', 'e', 'r'].includes(numberid)) {
    return res.status(400).json({ error: 'Invalid number ID. Use p, f, e, or r.' });
  }

  try {
    // Fetch numbers from the third-party API with authentication
    const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjA3OTM0LCJpYXQiOjE3NDM2MDc2MzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImMyNjJlZjMxLThiYzMtNDU4OC1iMTlhLTMzMmU2NDdjNjM0ZCIsInN1YiI6ImlzaGhhYS4yMDIyQGdtYWlsLmNvbSJ9LCJlbWFpbCI6ImlzaGhhYS4yMDIyQGdtYWlsLmNvbSIsIm5hbWUiOiJpc2hhIC4iLCJyb2xsTm8iOiIyMjA1MzgzIiwiYWNjZXNzQ29kZSI6Im53cHdyWiIsImNsaWVudElEIjoiYzI2MmVmMzEtOGJjMy00NTg4LWIxOWEtMzMyZTY0N2M2MzRkIiwiY2xpZW50U2VjcmV0IjoiUFhOWkJGQVducGRuZEN6cSJ9.wlIDre_sZgvRSLBsfOWQNRF7E2X50R0968JrtTVzow8`;
    const numbers = await fetchNumbers(numberid, token);

    // Update the sliding window
    const prevState = [...numberWindow];
    numberWindow = updateWindow(numberWindow, numbers, WINDOW_SIZE);

    // Calculate the average
    const avg = calculateAverage(numberWindow);

    // Respond with the required format
    res.json({
      windowPrevState: prevState,
      windowCurrState: numberWindow,
      numbers,
      avg: avg.toFixed(2),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch numbers or process request.' });
  }
};

module.exports = { getNumbers };