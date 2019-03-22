var express = require ('express')
var app = express()

app.get('/', function (req, res){
    res.send('Hola get');
});

app.post('/', function (req, res){
    res.send('Hola post');
});

app.put('/', function (req, res){
    res.send('Hola put');
});

app.delete('/', function (req, res){
    res.send('Hola delete');
});

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo 3000');
});