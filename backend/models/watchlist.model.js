const mongoose = require('mongoose');

const WatchlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  percent: { type: String },
  isDown: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Watchlist', WatchlistSchema);

