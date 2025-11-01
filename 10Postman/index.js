const express = require('express');
const mirrow = require('./endpoints/mirrow')

//vamos a hacer una instancia del servidor
const app = express();
const port = 3001;

app.use(express.json());//middleware para parsear el json
//definimos cada una de las rutas
app.get('/', mirrow);
app.post('/', mirrow);
app.put('/', mirrow);
app.patch('/', mirrow);
app.delete('/', mirrow);
app.head('/', mirrow);

app.listen(port, ()=> console.log(`El servidor esta escuchando en el puerto ${port}`))