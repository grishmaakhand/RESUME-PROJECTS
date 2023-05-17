const Mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UsersSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email address" });
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLenght: 6,
  },
});

UsersSchema.pre("save", function (next) {
  const regi = this;
  bcrypt.hash(regi.password, 10, (error, hash) => {
    regi.password = hash;
    next();
  });
});

const UsersModel = Mongoose.model("Users", UsersSchema);
module.exports = UsersModel;
//users
