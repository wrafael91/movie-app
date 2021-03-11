const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');
const bcrypt = require('bcryptjs')

//MongoDB
mongoose.connect('mongodb://localhost:27017/database-moviedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

//settings
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());//middleware for express to decode the body which is coming in.
app.set('port', process.env.PORT || 3000);

app.post('/api/register', async (req, res) => {

    const { username, password: plainTextPassword } = req.body

    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }

    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    if (plainTextPassword.length < 5) {
        return res.json({ status: 'error', error: 'Password should be longer' })
    }

    const password = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await User.create({
            username,
            password
        })
        console.log('User created succesfully: ', response)
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Username already in use' })
        }
        throw error
    }

    res.json({ status: 'ok' })
});

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
