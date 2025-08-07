const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to service1
router.post('/service1/ai', async (req, res) => {
  try {
    const response = await axios.post('http://service1:5001/ai', req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Service1 unavailable' });
  }
});

// Route to service2
router.post('/service2/ai', async (req, res) => {
  try {
    const response = await axios.post('http://service2:5002/ai', req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Service2 unavailable' });
  }
});

// Route to service3
router.post('/service3/ai', async (req, res) => {
  try {
    const response = await axios.post('http://service3:5003/ai', req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Service3 unavailable' });
  }
});

module.exports = router;
