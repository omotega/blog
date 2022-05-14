const mongoose = require("mongoose");

const postschema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },

  text: {
    type: String,
    required: [true, 'input the name field'],
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('Post',postschema);
