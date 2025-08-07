const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.json());

app.post('/ai', (req, res) => {
  const { message } = req.body;
  res.json({ reply: `Service1 AI received: ${message}` });
});

app.listen(PORT, () => {
  console.log(`Service1 listening on port ${PORT}`);
});
