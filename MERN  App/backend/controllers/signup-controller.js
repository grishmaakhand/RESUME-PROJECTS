const UsersModel = require("../models/Users.js");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email already registered");
    }

    // Create a new user
    const newUser = new UsersModel({
      name,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();

    // Successful signup
    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = signup;
