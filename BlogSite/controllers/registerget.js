module.exports = (req, res) => {
  var username = "";
  var userpassword = "";

  const data = req.flash("data")[0];

  if (typeof data != "undefined") {
    username = data.name;
    userpassword = data.password;
    console.log("Received data: ", username, userpassword);
  }
  res.render("register", {
    // errors: req.session.validationErrors || [],
    errors: req.flash("validationErrors") || [],
    username: username,
    userpassword: userpassword,
  });
};
