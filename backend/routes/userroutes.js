const express = require('express');
const userrouter = express.Router();


const {
    register,
    login,
} = require('../controllers/usercontroller');


userrouter.post('/',register);
userrouter.post('/login',login);


module.exports = userrouter;
