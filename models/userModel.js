// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// userSchema.pre('save', async function(next) {
//   const user = this;
//   if (!user.isModified('password')) return next();

//   try {
//     const hash = await bcrypt.hash(user.password, 10);
//     user.password = hash;
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// const User = mongoose.model("User", userSchema);

// // Create a user with username "admin" and password "admin" if it doesn't exist
// User.findOne({ username: "admin" }, async (err, user) => {
//   if (err) {
//     console.error("Error finding user:", err);
//     return;
//   }
//   if (!user) {
//     const hashedPassword = await bcrypt.hash("admin", 10);
//     User.create({ username: "admin", password: hashedPassword });
//     console.log("Admin user created with password 'admin'");
//   }
// });

// module.exports = User;
