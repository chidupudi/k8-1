const express = require('express');
const app = express();
const PORT = 5003;

app.use(express.json());
 
app.post('/ai', (req, res) => {
  const { message } = req.body;
  res.json({ reply: `Service3 AI handled: ${message}` });
});

app.listen(PORT, () => {
  console.log(`Service3 listening on port ${PORT}`);
});
