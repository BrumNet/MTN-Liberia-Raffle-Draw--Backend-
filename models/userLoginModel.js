const UserSignup = require("./userSignupModel")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userLoginSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userLoginSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All fields are required.");
  }

  const userLogin = await UserSignup.findOne({ username });
  if (!userLogin) {
    throw Error("Incorrect username or password");
  }

  const passwordMatch = await bcrypt.compare(password, userLogin.password);
  if (!passwordMatch) {
    throw Error("Incorrect username or password");
  }

  return userLogin;
};


module.exports = mongoose.model("Login", userLoginSchema);
