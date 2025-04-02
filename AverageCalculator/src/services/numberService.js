
const updateWindow = (window, newNumbers, size) => {
    newNumbers.forEach((num) => {
      if (!window.includes(num)) {
        window.push(num);
      }
    });
  
    while (window.length > size) {
      window.shift();
    }
  
    return window;
  };
  
  const calculateAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  };
  
  module.exports = { updateWindow, calculateAverage };
