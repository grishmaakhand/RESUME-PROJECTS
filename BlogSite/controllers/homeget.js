const BlogPost = require("../models/BlogPost");

module.exports = async (req, res) => {
  const allBlogpost = await BlogPost.find({}).populate("userid");
  console.log(allBlogpost);
  res.render("index", {
    BlogPostobj: allBlogpost,
  });
};
