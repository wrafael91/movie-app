const mongoose = require("mongoose");

// Setting up MongoDB 
const serverKeys = require('../config/config.js');

mongoose.connect(serverKeys.MONGOURI_API_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})
.then(db => console.log('MongoDB database connected'))
.catch(error => console.log('error'));

module.exports = mongoose;