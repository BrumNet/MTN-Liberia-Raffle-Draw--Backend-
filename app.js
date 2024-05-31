require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const signupRoutes = require("./routes/userSignup");
const loginRoutes = require("./routes/userLogin");
const raffleReportRoutes = require("./routes/raffleReportRoutes");
const prizeConfigRoutes = require("./routes/prizeConfigRoutes");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/user", loginRoutes);
app.use("/api/user", signupRoutes);
app.use("/api", raffleReportRoutes);
app.use("/api", prizeConfigRoutes); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Db connected, server is running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
