
const hbs = require('hbs');
const express = require('express')
require('dotenv').config();

const app = express();
const port = process.env.PORT;


//Handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
//Servir contenido estatico
//Hacer publica una carpeta
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });

})


app.get('/generic',  (req, res) => {
    res.render('generic', {
      nombre: 'Fernando Herrera',
      titulo: 'Curso de Node'
    });
    //res.sendFile( __dirname + '/public/generic.html' )
})
 
app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
 // res.sendFile( __dirname + '/public/elements.html' )
})


app.get('*',  (req, res) => {
   
  res.sendFile( __dirname + '/public/404.html' )
})

app.listen(port)