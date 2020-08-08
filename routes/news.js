const express = require('express');
const router = express.Router();

const getNewsController = require('../controllers/newsController');

router.get('/api/news/:query', (req, res) => {
  getNewsController(req, res);
})

module.exports = router;