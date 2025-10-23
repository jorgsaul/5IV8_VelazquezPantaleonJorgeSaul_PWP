var http = require('http');

//vamos a crear nuestro propio servidor
var servidor = http.createServer(function(req, res){
  //req -> request es una solicitud, viene por parte de la arquitectura cliente servidor, todos los clientes (navegadores, usuarios, app, servicios, etc) son los que realizan una peticion por parte del protocolo.
  //res -> es la respuesta que le da el servidor al cliente
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hola mundo desde Node.js</h1>');
  console.log('hola si entro')
  res.end();
});

//Es necesario tener un puerto de comunicacion para el servidor
servidor.listen(3000);

console.log('Servidor ejecutandose en http://localhost:3000');