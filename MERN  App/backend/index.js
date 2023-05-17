const express = require("express");
const Connection = require("./db/db");
const signupRouter = require("./routes/signup-route");
const loginRouter = require("./routes/login-route");

const app = express();
app.use(express.json());

app.use(signupRouter);
app.use(loginRouter);
console.log("ok3");

if (Connection) {
  console.log("Mongodb is connected to the server");
}
app.listen(4000, () => {
  console.log("Sever is running on 4000 Port");
});
