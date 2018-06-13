var mongoose = require('mongoose');

// Create the user model
var User = mongoose.model("User", {
    firstName: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    emailAddress: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    }
  });

module.exports = {
    User: User
}