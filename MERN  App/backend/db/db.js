const dotenv = require("dotenv");
const Mongoose = require("mongoose");

dotenv.config();
const DbURL = process.env.MONGODB_URL;

const Connection = Mongoose.connect(DbURL, {});

module.exports = Connection;
