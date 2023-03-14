const RegisterModel = require("../models/Register.js");
const Path = require("path");

module.exports = (req, res) => {
  RegisterModel.create(req.body, (error, register) => {
    if (error) {
      const validationErrors = Object.keys(error.errors).map(
        (key) => error.errors[key].message
      );
      req.flash("validationErrors", validationErrors);
      req.flash("data", req.body);
      return res.redirect("/register");
    }
    res.redirect("/");
  });
};
