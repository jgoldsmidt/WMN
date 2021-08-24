//Conexion MySQL
const Sequelize = require('sequelize')

//conexion a BBDD
let database = 'heroku_9fa156ca2c902ed'
let userMYSQL = 'bc419ed49598b9'
let passMySQL = 'e9c23c9c'
let hostMySQL = 'us-cdbr-east-04.cleardb.com'



const db = new Sequelize(database, userMYSQL, passMySQL, {
    host: hostMySQL,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
})

module.exports = db;