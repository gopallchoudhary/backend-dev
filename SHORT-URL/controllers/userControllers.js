const userModel = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../utils/auth");


async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await userModel.create({
    name,
    email,
    password,
  });
  return res.redirect("/login");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  if (!user)
    return res.render("login", {
      error: "Invalid email or password",
    });

  const sessionID = uuidv4();
  setUser(sessionID, user);
  res.cookie("uid", sessionID);
  console.log(req.cookies);

  return res.redirect("/");
}

module.exports = { handleUserSignUp, handleUserLogin };
