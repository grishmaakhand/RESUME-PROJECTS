const BlogPost = require("../models/BlogPost");
const Fileupload = require("express-fileupload");

module.exports = async (req, res) => {
  let image = req.files.image;

  let imagepath = "public/assets/img/" + image.name;
  image.mv(imagepath, async (error) => {
    await BlogPost.create({
      ...req.body,
      image: "/img/" + image.name,
      userid: req.session.userId,
    });

    res.redirect("/");
  });
};
