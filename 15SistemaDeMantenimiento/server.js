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

app.get('/averias/nueva', (req, res) => {
  res.render('nueva-averia');
})

app.post('/nueva-averia', (req, res) => {
  const {equipo_id, sintoma, diagnostico, accion_correctiva, piezas_reemplazadas, tiempo_inactividad, tecnico_responsable} = req.body;
  const query = `INSERT INTO averias (equipo_id, fecha_reporte, sintoma, diagnostico, accion_correctiva, piezas_reemplazadas, tiempo_inactividad, tecnico_responsable) VALUES ('${equipo_id}', NOW(), '${sintoma}', '${diagnostico}', '${accion_correctiva}', '${piezas_reemplazadas}', '${tiempo_inactividad}', '${tecnico_responsable}')`;
  bd.query(query, (error, results) => {
    if(error) throw error;
    res.redirect('/');
  });
});

app.get('/averias/eliminar/:id', (req, res) => {
  const {id} = req.params;
  const query = `DELETE FROM averias WHERE id = ${id}`;
  bd.query(query, (error, results) => {
    if(error) throw error;
    res.redirect('/');
  });
})

app.get('/averias/editar/:id', (req, res) => {
  const {id} = req.params;
  const query = `SELECT * FROM averias WHERE id = ${id}`;
  bd.query(query, (error, results) => {
    if(error) throw error;
    res.render('editar-averia', {averia: results[0]});
  });
})

app.post('/editar-averia/:id', (req, res) => {
  const averiaId = req.params.id;
  const {equipo_id, sintoma, diagnostico, accion_correctiva, piezas_reemplazadas, tiempo_inactividad, tecnico_responsable} = req.body;
  const query = `UPDATE averias SET equipo_id = '${equipo_id}', sintoma = '${sintoma}', diagnostico = '${diagnostico}', accion_correctiva = '${accion_correctiva}', piezas_reemplazadas = '${piezas_reemplazadas}', tiempo_inactividad = '${tiempo_inactividad}', tecnico_responsable = '${tecnico_responsable}' WHERE id = ${averiaId}`;
  bd.query(query, (error, results) => {
    if(error) {
      console.log(error)
      throw error
    };
    res.redirect('/');
  });
});

bd.connect((error) => {
  error ?  console.log('Error de conexion en la base de datos' + error) : console.log('conexion exitosa')
});


app.listen(port, ()=>{
  console.log(`Sevidor corriendo en http://localhost:${port}`)
})
