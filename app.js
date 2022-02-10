const express = require('express')
const app = express();
const port = 8080;

//Servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.send('Home page')
})

app.get('/hola-mundo',  (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
  })

app.get('*',  (req, res) => {
   res.send('404 page not found')
})

app.listen(8080)