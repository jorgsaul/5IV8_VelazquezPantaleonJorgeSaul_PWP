/*
Vamos a crear un cliente servidor para un crood
Para esto tenemos que probar si el modulo de mysql esta verificado, si no utlizaremos mysql2
*/

const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const ejs = require('ejs')
require('dotenv').config({
  path: './.env'
})

const app = express();
const port = 3000;

const bd = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env. DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

bd.connect((error) => {
  error ?  console.log('Error de conexion en la base de datos' + error) : console.log('conexion exitosa')
})

//tenemos que configurar nuestro mddleware el cual estarmeos usando rutas y codificacion de al informacion por json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//tenemos que configurar las vistas que se van a ejecutar
app.set('view engine', 'ejs');

//donde se encuentra el directorio de las vistas
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/css'))

//vamos a crear el crud de estudiantes a partir de rutas

//rutas para crear un estudiantes

app.get('/', (req, res) => {
  const query = 'SELECT * FROM estudiantes';
  bd.query(query, (error, results) => {
    if(error){
      console.log(error)
      res.status(500).send('Error al obtener los estudiantes')
    } 
  res.render('index', {estudiantes: results})
  });
});

app.post('/estudiantes', (req, res) => {
  const { nombre, edad, curso } = req.body;
  bd.query(`INSERT INTO estudiantes (nombre, edad, curso) VALUES (${nombre}, ${edad}, ${curso})`, (error, results) => {
    error ? console.log(error) : res.redirect('/');
  });
});

app.get('/estudiantes/delete/:id', (req, res) => {
  const estudianteid = req.params.id;
  const query = `DELETE FROM estudiantes WHERE id = ${estudianteid}`;
  bd.query(query, (error, results) => {
    if(error){
      console.log(error)
      res.status(500).send('Error al eliminar el estudiante')
    }
    res.redirect('/');
  });
});


app.get('/estudiantes/edit/:id', (req, res) => {
  const estudianteid = req.params.id;
  const query = `SELECT * FROM estudiantes WHERE id = ${estudianteid}`;
  bd.query(query, (error, results) => {
    if(error){
      console.log(error)
      res.status(500).send('Error al obtener el estudiante')
    }else{
      res.render('edit', {estudiante: results[0]})
    }
  });
})

app.post('/estudiantes/update/:id', (req, res) => {
  const estudianteid = req.params.id;
  const { nombre, edad, curso } = req.body;
  const query = `UPDATE estudiantes SET nombre = '${nombre}', edad = ${edad}, curso = '${curso}' WHERE id = ${estudianteid}`;
  bd.query(query, (error, results) => {
    if(error){
      console.log(error)
      res.status(500).send('Error al actualizar el estudiante')
    }
    res.redirect('/');
  });
})

app.listen(port, ()=>{
  console.log(`Sevidor corriendo en http://localhost:${port}`)
})