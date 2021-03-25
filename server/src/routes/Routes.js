const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels.js')
const bcrypt = require('bcrypt');

router.post('/signup', async (request, response) => {

    //Making the password secure by hashing the characters.
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(request.body.password, saltPassword);

    const { fullname, username, email, password  } = request.body;
    const signedUpUser = new signUpTemplateCopy();
    
    signedUpUser.fullname = fullname;
    signedUpUser.username = username;
    signedUpUser.email = email;
    signedUpUser.password = securePassword;

    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router;