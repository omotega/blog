const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'input the name field'],
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('User',userschema);
