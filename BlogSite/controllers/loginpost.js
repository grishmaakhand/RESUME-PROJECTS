const RegisterModel = require("../models/Register.js");
const Path = require("path");
const Bcrypt = require("bcrypt");

module.exports = (req, res) => {
  const { name, password } = req.body;
  RegisterModel.findOne({ name: name }, (error, register) => {
    if (register) {
      Bcrypt.compare(password, register.password, (error, match) => {
        if (match) {
          req.session.userId = register._id;
          res.redirect("/");
        } else {
          res.redirect("/login");
        }
      });
    } else {
      res.redirect("/login");
    }
  });
};
