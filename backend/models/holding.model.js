const mongoose = require('mongoose');

const HoldingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number },
  price: { type: Number },
  net: { type: String },
  day: { type: String },
  isLoss: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Holding', HoldingSchema);

