var mongoose = require("mongoose");

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports={
    mongoose: mongoose
};