require('dotenv').config();
const signupRoutes = require("./routes/userSignup");
const loginRoutes = require("./routes/userLogin")
const mongoose = require('mongoose');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use("/api/user", loginRoutes)
app.use("/api/user", signupRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
    console.log(`Db connected, server is running on port ${process.env.PORT}`);
})
}).catch((error) => {
    console.log(error);
})
