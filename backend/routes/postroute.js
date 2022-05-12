const express = require('express');

const userrouter = express.Router();


const {
    getposts,
    createpost,
    updatepost,
    deletepost,
} = require('../controllers/postcontroller');


userrouter.get('/',getposts);
userrouter.post('/',createpost);
userrouter.put('/:id',updatepost);
userrouter.delete('/:id',deletepost);



module.exports = userrouter;