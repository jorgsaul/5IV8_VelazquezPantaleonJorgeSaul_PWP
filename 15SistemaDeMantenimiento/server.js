const bd = require('./config/database');
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/css'))

app.get('/', (req, res) => {
  const query = 'SELECT * FROM averias';
  bd.query(query, (error, results) => {
    if(error) throw error;
    res.render('index', {averias: results});
  })
});

bd.connect((error) => {
  error ?  console.log('Error de conexion en la base de datos' + error) : console.log('conexion exitosa')
});


app.listen(port, ()=>{
  console.log(`Sevidor corriendo en http://localhost:${port}`)
})
