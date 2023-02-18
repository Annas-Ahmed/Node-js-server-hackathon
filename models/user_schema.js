const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  contactNumber: {
    type: String,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
