const mongoose = require("mongoose");

// Setting up MongoDB 
const MONGOURI = "mongodb://localhost:27017/database-moviedb?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})
.then(db => console.log('MongoDB database connected'))
.catch(error => console.log('error'));

module.exports = mongoose;