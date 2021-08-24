const Sequelize = require('sequelize')
const db = require('../config/db')

//Definimos la tabla la cual vamos a consumir
const tablaLibros = db.define('books', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: { type: Sequelize.STRING },
    year: { type: Sequelize.INTEGER },
    active: { type: Sequelize.INTEGER },
    img: { type: Sequelize.STRING },
});

module.exports = tablaLibros