var express = require('express');

var todoControllers = require('./controllers/todocontrollers')

var app = express();
// set up the view engine

app.set('view engine', 'ejs');

// get the static files like css files

app.use(express.static('./public')) // this will make it global irrespective of the routes we are in

// fire controllers

todoControllers(app);

app.listen(4000);
console.log('You are listening to port:3000')
