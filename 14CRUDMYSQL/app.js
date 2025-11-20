/*
Vamos a crear un cliente servidor para un crood
Para esto tenemos que probar si el modulo de mysql esta verificado, si no utlizaremos mysql2
*/

const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express();
const port = 3000;

const bd = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'n0m3l0',
  database: 'estudiantescecyt'
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
    }else{
      res.render('index', {estudiantes: results})
    }
  });
  res.render('index')
});

app.post('/estudiantes', (req, res) => {
  const { nombre, edad, curso } = req.body;
  bd.query(`INSERT INTO estudiantes (nombre, edad, curso) VALUES (${nombre}, ${edad}, ${curso})`, (error, results) => {
    error ? console.log(error) : res.redirect('/');
  });
});


app.listen(port, ()=>{
  console.log(`Sevidor corriendo en http://localhost:${port}`)
})