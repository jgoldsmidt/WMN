const express = require('express')
const router = express.Router()

let titleweb = "Alta de Libros"
let yearweb = new Date().getFullYear();

router.get('/', function(request, response) {
    response.render('form-altaLibro.hbs', { titleweb, yearweb })
})

//Cargar Libros
const tablaLibros = require('../models/tablaLibros')

router.post('/', async(req, res) => {
    const newLibro = {
        id: 0,
        title: req.body.nombre,
        year: req.body.anio,
        active: req.body.activo,
        img: req.body.imagen,
    }
    console.log(newLibro)
        //ojo el orden de los campos -> ver la tabla antes
    try {
        const cargarLibro = await tablaLibros.create({
                id: newLibro.id,
                title: newLibro.nombre,
                year: newLibro.anio,
                active: newLibro.activo,
                img: newLibro.imagen,
            })
            //console.log(cargarProd)

        res.render("form-altaLibro.hbs", { titleweb, yearweb, alta: true })

    } catch (error) {
        console.log("Error en el alta " + error)
        res.render("form-altaLibro.hbs", { yearweb, alta: false, error })
    }
})

module.exports = router;