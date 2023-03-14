//start of Reuired packages
const Express = require("express");
// const Path = require("path");
const Ejs = require("ejs");
const Mongoose = require("mongoose");
// const BlogPost = require("./models/BlogPost");
const Fileupload = require("express-fileupload");
const ConnectFlash = require("connect-flash");
//end of Reuired packages

//connect mongoose

Mongoose.connect("mongodb://localhost/blogdb", {
  useNewUrlParser: true,
})
  .then(() => console.log("connected with mongodb"))
  .catch((err) => console.log(err));

const app = Express();
// MiddlerWare
const validateMiddleWare = require("./middleware/validatemw");
const Expreesession = require("express-session");
const withoutregisterMiddleware = require("./middleware/withoutregister");
const authontcationMiddleware = require("./middleware/authon");

//use
app.use(Express.static("public"));
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(Fileupload());
app.use(ConnectFlash());
app.use("/create/store", validateMiddleWare);
app.use(
  Expreesession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    secret: "your-secret-key",
  })
);
global.loggedIn = null;
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

//set to connect to the port
app.set("view engine", "ejs");
app.listen(3001, () => {
  console.log("server is running on 3001 port");
});

//set req variable
const homeGetController = require("./controllers/homeget");
const aboutGetController = require("./controllers/aboutget");
const contactGetController = require("./controllers/contactget");
const singlepostGetController = require("./controllers/singlepostpgget");
const createGetController = require("./controllers/createget");
const createfromController = require("./controllers/createfrompost");
const registerGetController = require("./controllers/registerget");
const registerPostController = require("./controllers/registerpost");
const loginGetController = require("./controllers/loginget");
const loginPostController = require("./controllers/loginpost");
const logoutController = require("./controllers/logoutget");

//get req using variable
app.get("/", homeGetController);
app.get("/about", aboutGetController);
app.get("/contact", contactGetController);
app.get("/post/:id", singlepostGetController);
app.get("/create", withoutregisterMiddleware, createGetController);
app.post("/create/store", withoutregisterMiddleware, createfromController);
app.get("/register", authontcationMiddleware, registerGetController);
app.post(
  "/register/userfromdata",
  authontcationMiddleware,
  registerPostController
);
app.get("/login", authontcationMiddleware, loginGetController);
app.post("/login/userfromdata", authontcationMiddleware, loginPostController);
app.get("/logout", logoutController);
app.use((req, res) => {
  res.render("notfoundpg");
});
