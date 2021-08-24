const express = require('express')
const Sequelize = require('sequelize')
const router = express.Router()
    //Conexion MYSQL
const db = require('../config/db')
    //Model Tabla Citas
const tablaCitas = require('../models/tablaCitas')

let titleweb = "Joyce"
let yearweb = new Date().getFullYear()

// arrow function
/*router.get('/', async(req, res) => {
    //consulta
    const traerCita = await tablaCitas.findAll({
        attributes: ['id', 'title', 'qsp', 'qen', 'qfr'],
        order: [
            ['id', 'DESC']
        ]
    })
    console.log(traerCita)
    res.render('libroSimple.hbs', { titleweb, yearweb, Citas: traerCita })
})*/

router.get('/', async(req, res) => {
    /*let paramURL2 = req.params.id*/
    const consulCita = await tablaCitas.findAll({
        /*where: { title: paramURL2 },*/
        attributes: ['id', 'title', 'qsp', 'qen', 'qfr'],
        order: [
            ['id', 'ASC']
        ]
    });
    console.log(consulCita);

    res.render('libroSimple.hbs', { Citas: consulCita })
})


module.exports = router;