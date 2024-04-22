const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    max: 100,
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
});

//const user = mongoose.model("user", userSchema);
//module.exports = { user };
module.exports = mongoose.model('user', userSchema)