const Mongoose = require("mongoose");
const Register = require("./Register.js");

const createSchema = new Mongoose.Schema({
  title: String,
  description: String,
  userid: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "register",
    required: true,
  },
  datepost: {
    type: Date,
    default: new Date(),
  },
  image: String,
});

const createModel = new Mongoose.model("Blogpost", createSchema);
module.exports = createModel;
