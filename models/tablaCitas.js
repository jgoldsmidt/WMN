const Sequelize = require('sequelize')
const db = require('../config/db')

//Definimos la tabla la cual vamos a consumir
const tablaCitas = db.define('textbook', {
    qid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titleid: { type: Sequelize.INTEGER },
    qsp: { type: Sequelize.TEXT },
    qen: { type: Sequelize.TEXT },
    qfr: { type: Sequelize.TEXT },
});

module.exports = tablaCitas