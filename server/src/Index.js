const express = require("express");
const dotenv = require("dotenv");
const InitiateMongoServer = require("./config/Database");
const cors = require('cors');
const routesUrls = require('./routes/Routes.js'); 

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});