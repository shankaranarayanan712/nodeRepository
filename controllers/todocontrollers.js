// This is a server side file

var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://test:test@ds137826.mlab.com:37826/todonode')

var todoSchema = new mongoose.Schema({
    item : String
});

var Todo = mongoose.model('Todo' , todoSchema)

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function todoControllers(app) {
    
    app.get('/todo', function (req, res) {
        // get Data from Mongo db
        Todo.find({}, function (err, data) {
            if (err) throw err
            res.render('todo', {todos:data})
        })
    })
    app.use('/todo', urlencodedParser)
    
    app.post('/todo', function (req, res) {
        var newTodo = Todo(req.body).save(function (err, data) {
            if(err) throw err
            res.json(data)
        })
    })
    app.get('/todo/getItem/:itemId', function (req, res) {
        Todo.findById(req.params.itemId , function (err, data) {
            if (err) throw err
            res.render('todo', {todos:data})
        })
        
    })
    
    app.delete('/todo/:item', function (req, res) {
        debugger;
        Todo.find({item : req.params.item}).remove(function (err, data) {
            if(err) throw err
            res.json(data)
        })
    })
    
    app.get('/program', function (req, res) {
        res.render('program')
        
    })
};
