const express = require('express')
const Sequelize = require('sequelize')
const router = express.Router()
    //Conexion MYSQL
const db = require('../config/db')
    //Model Tabla Libros
const tablaLibros = require('../models/tablaLibros')

let titleweb = "Libros"
let yearweb = new Date().getFullYear()
let legales = 'Al comprar estás asumiendo un compromiso. Haga todas las preguntas que quiera antes de ofertar, para que nuestro departamento de atención al cliente evacue tus dudas y puedas elegir correctamente el producto adecuado.'
let envios = 'ENVIOS x CORREO A TODO EL PAIS. <br> Podes cargarle tu dirección en la misma compra (tené en cuenta que tiene que haber alguien para recibirlo), o si no podés cargar la dirección de la sucursal del correo que elijas cercana a tu domicilio, tambien dirección de algún local adherido a pickit para que retires por ahí, siempre eligiendo a tu comodidad.'

// arrow function
router.get('/', async(req, res) => {
    //consulta
    const traerLibro = await tablaLibros.findAll({
            attributes: ['id', 'title', 'year'],
            order: [
                ['id', 'DESC']
            ]
        })
        //console.log(traerProd)
    res.render('listadoLibros.hbs', { titleweb, yearweb, Libros: traerLibro })
})

router.get('/:id', async(req, res) => {
    let paramURL = req.params.id

    const consultaLibro = await tablaLibros.findOne({ where: { id: paramURL } });

    res.render('Librosimple.hbs', { LibroSingle: consultaLibro, legales, envios, titleweb, yearweb })
})

module.exports = router;