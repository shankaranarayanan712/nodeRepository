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
    
    app.get('/todo',(req, res)=> {
        // get Data from Mongo db
        Todo.find({}, (err,data) => {
            if (err) throw err
            res.render('todo', {todos:data})
        })
    })
    app.use('/todo', urlencodedParser)
    app.post('/todo',(req, res) => {
        var newTodo = Todo(req.body).save((err, data)=> {
            if(err) throw err
            res.json(data)
        })
    })
    app.delete('/todo/:item', (req, res)=> {
        Todo.find({item : req.params.item}).remove( (err, data) => {
            if(err) throw err
            res.json(data)
        })
    })
};
