var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();


/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))


/* Gestion des routes en-dessous
   ....                         */

app.get('/todo', function(req, res) {
    res.setHeader('Content-Type','Text/plain');
    res.send('')
});

app.post('/todo/ajouter/', function(req, res) {
    res.setHeader('Content-Type', 'Text/plain');
    res.send('')
})

app.get('/todo/ajouter/:id', function(req, res) {
    res.render('id.ejs', {})
})