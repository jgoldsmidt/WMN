var express = require('express');
var router = express.Router();

let yearweb = new Date().getFullYear();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.hbs', { titleweb: 'Joyce', yearweb });
});
module.exports = router;