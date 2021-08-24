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
        //desactivamos el timestamp, para que no envie fechas de actualizaciones a la db
        //https://sequelize.org/v5/manual/models-definition.html
        //https://sequelize.org/v5/manual/models-definition.html#configuration
        timestamps: false,
    }
})

module.exports = db;