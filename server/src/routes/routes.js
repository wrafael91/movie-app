const { Router } = require('express');
const router = Router();
const UserCtrl = require('../controllers/user.js');

//Register Endpoint
router.post('/signup', UserCtrl.createUser);
router.post('/login', UserCtrl.login);

module.exports = router;