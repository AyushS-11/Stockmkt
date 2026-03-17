// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");


// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

// const app= express();
// app.listen(3002,()=>{
//     console.log("app started");
//     mongoose.connect(uri);
// });



require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// ✅ Check if URI is coming
console.log("Mongo URI:", uri);

// ✅ Connect to MongoDB FIRST
mongoose.connect(uri)
  .then(() => {
    console.log("✅ MongoDB Connected");

    // ✅ Start server AFTER DB connects
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });