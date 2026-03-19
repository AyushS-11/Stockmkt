require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = Number(process.env.PORT) || 3002;
const mongoUrl = process.env.MONGO_URL;

// Middlewares
app.use(cors());
app.use(express.json());

// Mount API routes
app.use("/api", apiRoutes);

async function startServer() {
  if (!mongoUrl) {
    console.error("Missing MONGO_URL in backend/.env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
