const Mongoose = require("mongoose");
const Bcrypt = require("bcrypt");
const uniqueuser = require("mongoose-unique-validator");

const CreateRegisterSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Enter the password"],
  },
});
CreateRegisterSchema.plugin(uniqueuser);

CreateRegisterSchema.pre("save", function (next) {
  const regi = this;
  Bcrypt.hash(regi.password, 10, (error, hash) => {
    regi.password = hash;
    next();
  });
});

const CreateRegisterModel = Mongoose.model("register", CreateRegisterSchema);
module.exports = CreateRegisterModel;
