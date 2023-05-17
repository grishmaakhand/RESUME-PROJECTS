const UsersModel = require("../models/Users.js");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UsersModel.findOne({ email });
    if (!user) {
      throw new Error("invalid login credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("invalid login credentials");
    }

    console.log("ok");
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = login;
