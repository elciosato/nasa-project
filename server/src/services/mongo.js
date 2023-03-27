const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.dhfrtyk.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection open!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
