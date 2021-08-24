const express = require('express')
const router = express.Router()

let title = "Alta de Libros"
let year = new Date().getFullYear();

router.get('/', function(request, response) {
    response.render('form-altaLibro.hbs', { title, year })
})

//Cargar Libros
const tablaLibros = require('../models/tablaLibros')

router.post('/', async(req, res) => {
    const newLibro = {
        id: 0,
        nombre: req.body.nombre,
        anio: req.body.anio,
        activo: req.body.activo,
        imagen: req.body.imagen,
    }
    console.log(newLibro)
        //ojo el orden de los campos -> ver la tabla antes
    try {
        const cargarLibro = await tablaLibros.create({
                id: newLibro.id,
                nombre: newLibro.nombre,
                anio: newLibro.anio,
                activo: newLibro.activo,
                imagen: newLibro.imagen,
            })
            //console.log(cargarProd)

        res.render("form-altaLibro.hbs", { title, year, alta: true })

    } catch (error) {
        console.log("Error en el alta " + error)
        res.render("form-altaLibro.hbs", { data, year, alta: false, error })
    }
})

module.exports = router;