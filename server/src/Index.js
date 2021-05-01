const express = require("express");
const app = express();
const morgan = require('morgan');
require("./routes/database.js");
const cors = require('cors');

// PORT
app.set('Port', 5000);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origen: "*"}));

//Routes
app.use('/app', require('./routes/routes.js'));
app.use('/app/favorite', require('./routes/favorite.js'));

app.listen(app.get('Port'), () => {
  console.log('Server running on port ', app.get('Port'))
})