const express = require('express');
const app = express();
const PORT = 5002;

app.use(express.json());

app.post('/ai', (req, res) => {
  const { message } = req.body;
  res.json({ reply: `Service2 AI processed: ${message}` });
});

app.listen(PORT, () => {
  console.log(`Service2 listening on port ${PORT}`);
});
