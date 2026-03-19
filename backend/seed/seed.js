require('dotenv').config();
const mongoose = require('mongoose');
const { watchlist, holdings, positions } = require('./data');
const Watchlist = require('../models/watchlist.model');
const Holding = require('../models/holding.model');
const Position = require('../models/position.model');

const uri = process.env.MONGO_URL;

if (!uri) {
  console.error('MONGO_URL not set; please set MONGO_URL in .env to run the seed script.');
  process.exit(1);
}

async function seed() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB for seeding');

    // Clear existing collections
    await Watchlist.deleteMany({});
    await Holding.deleteMany({});
    await Position.deleteMany({});

    // Insert seed data
    await Watchlist.insertMany(watchlist);
    await Holding.insertMany(holdings);
    await Position.insertMany(positions);

    console.log('Seeding completed successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();

