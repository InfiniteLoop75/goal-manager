const {db} = require('../db/dbconfig');
const Sequelize = db.Sequelize;
const Address = db.define('address',{
    ID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Country:{
        type: Sequelize.STRING,
        allowNull: false
    },
    City:{
        type: Sequelize.STRING,
        allowNull: false
    },
    District:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Address_Line:{
        type:Sequelize.TEXT,
        allowNull: false
    }
});
module.exports = {Address}