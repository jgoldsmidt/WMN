const express = require('express')
const Sequelize = require('sequelize')
const router = express.Router()
    //Conexion MYSQL
const db = require('../config/db')
    //Model Tabla Libros
const tablaLibros = require('../models/tablaLibros')

let titleweb = "Libros"
let yearweb = new Date().getFullYear()

// arrow function
router.get('/', async(req, res) => {
    //consulta
    const traerLibro = await tablaLibros.findAll({
        attributes: ['id', 'title', 'year', 'active', 'img'],
        order: [
            ['id', 'ASC']
        ]
    })
    console.log(traerLibro)
    res.render('listadoLibros.hbs', { titleweb, yearweb, Libros: traerLibro })
})

router.get('/:id', async(req, res) => {
    let paramURL = req.params.id

    const consulLibro = await tablaLibros.findOne({ where: { id: paramURL } });

    res.render('librosimple.hbs', { libroSingle: consulLibro })
})

module.exports = router;