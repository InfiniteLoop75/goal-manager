const {db} = require('../db/dbconfig');
const Sequelize = db.Sequelize;
const SubTask = db.define('subtasks',{
    ID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Description:{
        type: Sequelize.TEXT
    },
    Status:{
        type: Sequelize.ENUM('active', 'finished', 'overdue'),
        defaultValue: 'active'
    },
    Deadline: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = {SubTask}