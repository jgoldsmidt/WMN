var express = require('express');
var router = express.Router();

let users = [{
    nombre: ["Julieta", "Goldsmidt"],
    anioNac: 1993,
    localidad: "Ramos Mejía, Buenos Aires",
    profesion: "Psicóloga e Investigadora",
    genero: 0,
    activo: true
}, {
    nombre: ['Roberto Alejo', "Salvo"],
    anioNac: 1992,
    localidad: "Ramos Mejía, Buenos Aires",
    profesion: "Administrativo",
    genero: 1,
    activo: true
}, {
    nombre: ["Lara", "Antolini"],
    anioNac: 1993,
    localidad: "Morón, Buenos Aires",
    profesion: 'Lic en turismo',
    genero: 0,
    activo: true
}, {
    nombre: ["Yi-Ran", "Wang"],
    anioNac: 1986,
    localidad: "Flores, CABA",
    profesion: 'Psicóloga',
    genero: 0,
    activo: false
}]

let titleweb = "Usuarios"
let date = new Date()

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.render('usuarios.hbs', { users, titleweb, yearweb: date.getFullYear() })

});

module.exports = router;