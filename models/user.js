const {db} = require('../db/dbconfig');
const Sequelize = db.Sequelize;
const User = db.define('users',{
    ID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    About:{
        type: Sequelize.STRING
    },
    UserName:{
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Password:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    DateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
    }
});
module.exports = {User}