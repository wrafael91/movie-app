const mongoose = require("mongoose");

// Setting up MongoDB 
const MONGOURI = "mongodb://localhost:27017/database-moviedb?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = InitiateMongoServer;