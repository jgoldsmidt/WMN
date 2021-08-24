const Sequelize = require('sequelize')
const db = require('../config/db')

//Definimos la tabla la cual vamos a consumir
const tablaProductos = db.define('libros', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: { type: Sequelize.STRING },
    anio: { type: Sequelize.INTEGER },
    activo: { type: Sequelize.INTEGER },
    imagen: { type: Sequelize.STRING },
});

module.exports = tablaLibros