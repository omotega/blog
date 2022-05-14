const mongoose = require('mongoose');

const paymentschema = mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    amount:{
        type: String,
        required: true,
    },
    Reference:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Payment',paymentschema);