const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGOURI_API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((db) => console.log("MongoDB database connected"))
  .catch((error) => console.log("error"));

module.exports = mongoose;
