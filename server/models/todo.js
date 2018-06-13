var mongoose = require('mongoose');

// create the model
var Todo = mongoose.model("Todo", {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    doneBy: {
      type: String
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
  });

  module.exports = {
      Todo: Todo
  }