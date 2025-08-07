const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('API Gateway is running');
});

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
