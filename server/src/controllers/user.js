const UserCtrl = {};
const User = require('../models/User.Model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/config.js');

UserCtrl.createUser = async (req, res) => {
    const {name, email, password} = req.body;
    const NewUser = new User({
        name, email, password
    })
    const userEmail = await User.findOne({email:email});
    if (userEmail) {
        res.json({
            message: 'Email already exists'
        })
    } else {
        NewUser.password = await bcrypt.hash(password, 10);
        const token = jwt.sign({_id:NewUser._id}, SECRET_KEY);
        await NewUser.save();
        res.json({
            message: 'Welcome',
            id: NewUser._id,
            name: NewUser.name,
            token
        })
    }
}

UserCtrl.login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email:email});
    if (!user){
        return res.json({
            message: 'Invalid email'
        })
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
        const token = jwt.sign({_id:user._id}, 'secret');
        res.json({
            message: 'Welcome',
            id: user._id,
            name: user.name,
            token
        })
    } else {
        res.json({
            message: 'Invalid password'
        })
    }
}

module.exports = UserCtrl;  