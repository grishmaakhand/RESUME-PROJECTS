const BlogPost = require("../models/BlogPost");

module.exports = async (req, res) => {
  const postId = req.params.id.trim();
  const passpost = await BlogPost.findById(postId).populate("userid");
  res.render("post", { passpost });
};
