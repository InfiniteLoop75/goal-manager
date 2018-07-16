const express = require('express');
const app = express();

const {Task} = require('./models/task');
const {SubTask} = require('./models/subtask');
const {Address} = require('./models/address');
const {User} = require('./models/user');
User.hasMany(Address);
User.hasMany(Task);
Address.belongsTo(User);
Task.belongsTo(User);
Task.hasMany(SubTask);
SubTask.belongsTo(Task);
User.sync();
Address.sync(Address);
Task.sync();
SubTask.sync();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(3000, ()=>{
    console.log('Server is up and running');
});