const Sequelize = require('sequelize')
const db = require('../config/db')

//Definimos la tabla la cual vamos a consumir
const tablaCitas = db.define('textbook', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: { type: Sequelize.INTEGER },
    qsp: { type: Sequelize.STRING },
    qen: { type: Sequelize.STRING },
    qfr: { type: Sequelize.STRING },
});

module.exports = tablaCitas