const express = require('express');
const router = express.Router();
const Watchlist = require('../models/watchlist.model');
const Holding = require('../models/holding.model');
const Position = require('../models/position.model');

// Health
router.get('/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// GET all
router.get('/watchlist', async (req, res) => {
  const items = await Watchlist.find().sort({ createdAt: -1 });
  res.json(items);
});

router.get('/holdings', async (req, res) => {
  const items = await Holding.find().sort({ createdAt: -1 });
  res.json(items);
});

router.get('/positions', async (req, res) => {
  const items = await Position.find().sort({ createdAt: -1 });
  res.json(items);
});

module.exports = router;

