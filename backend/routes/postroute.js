const express = require('express');

const postrouter = express.Router();


const {
    getposts,
    createpost,
    updatepost,
    deletepost,
} = require('../controllers/postcontroller');


postrouter.get('/',getposts);
postrouter.post('/',createpost);
postrouter.put('/:id',updatepost);
postrouter.delete('/:id',deletepost);



module.exports = postrouter;