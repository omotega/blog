const mongoose = require("mongoose");


const userschema = mongoose.Schema({
    name: {
        type: String,
        required:[true,'please fill in the name field']
    },
    email: {
        type: String,
        required: [true,'please fill the email field']
    },
    password: {
        type: String,
        required: [true,'please fill in the password field']
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('User',userschema)

