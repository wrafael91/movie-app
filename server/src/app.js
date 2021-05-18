if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const morgan = require('morgan');
require("./routes/database.js");
const cors = require('cors');
const path = require('path');
// PORT
app.set('Port', process.env.PORT || 5000);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origen: "*"}));
app.use(express.static(path.join(__dirname,'dist')));

//Routes
app.use('/app', require('./routes/index.js'));
app.use('/app/favorite', require('./routes/favorite.js'));


app.listen(app.get('Port'), () => {
  console.log('Server running on port ', app.get('Port'))
});