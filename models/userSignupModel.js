const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSignupSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup method
userSignupSchema.statics.signup = async function (
  username,
  password
) {
  const usernameExists = await this.findOne({ username });
  if (usernameExists) {
    throw Error("username already exists");
  }

  if (!username || !password) {
    throw Error("All fields are required");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Not a strong password");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const userSignup = await this.create({
    username,
    password: hash,
  });
  return userSignup;
};

module.exports = mongoose.model("Signup", userSignupSchema);
