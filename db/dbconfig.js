const Sequelize = require('sequelize');
const db = new Sequelize('task_mngr', 'root', 'android6699', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions:{
        multipleStatements: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
db
    .authenticate()
    .then(()=>{
        console.log('Connected to DB');
    })
    .catch(err=>{
        console.log('Error to connect db', err);
    });

module.exports = {
    db
}