var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body.title);
    console.log(req.body.tarjeta);
    res.send('send');
    //res.render('send');
});

module.exports = router;
