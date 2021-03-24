const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels.js')


router.post('/signup', (request, response) => {
    const { fullname, username, email, password  } = request.body;
    const signedUpUser = new signUpTemplateCopy();
    
    signedUpUser.fullname = fullname;
    signedUpUser.username = username;
    signedUpUser.email = email;
    signedUpUser.password = password;

    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router;