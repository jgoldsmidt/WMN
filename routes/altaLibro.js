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
        title: req.body.title,
        year: req.body.year,
        active: req.body.active,
        img: req.body.img,
    }
    console.log(newLibro)
    try {
        const cargarLibro = await tablaLibros.create({
            id: newLibro.id,
            title: newLibro.title,
            year: newLibro.year,
            active: newLibro.active,
            img: newLibro.img,

        })

        res.render("form-altaLibro.hbs", { titleweb, yearweb, alta: true })

    } catch (error) {
        console.log("Error en el alta " + error)
        res.render("form-altaLibro.hbs", { yearweb, alta: false, error })
    }
})

module.exports = router;