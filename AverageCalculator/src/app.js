const express = require('express');
const numbersRoutes = require('./routes/numbers');

const app = express();
const PORT = 9876;

app.use(express.json());
app.use('/numbers', numbersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
