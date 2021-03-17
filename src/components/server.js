const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');


//MongoDB
// mongoose.connect('mongodb://localhost:27017/database-moviedb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })

//settings
app.use('/', express.static(path.join(__dirname, 'static')));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
