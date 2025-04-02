
const updateWindow = (window, newNumbers, size) => {
    // Add unique numbers to the window
    newNumbers.forEach((num) => {
      if (!window.includes(num)) {
        window.push(num);
      }
    });
  
    // Ensure the window size does not exceed the limit
    while (window.length > size) {
      window.shift(); // Remove the oldest number
    }
  
    return window;
  };
  
  const calculateAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  };
  
  module.exports = { updateWindow, calculateAverage };