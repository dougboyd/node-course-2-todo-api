var express = require('express');
var bodyParser = require('body-parser')

var {
  mongoose
} = require('./db/mongoose');
var {
  Todo
} = require('./models/todo');
var {
  User
} = require('./models/user');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

// Create a new todo
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.status(200);
    res.send(`saved documet: ${doc}`);
  }).catch((err) => {
    res.status(400);
    res.send(err);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})