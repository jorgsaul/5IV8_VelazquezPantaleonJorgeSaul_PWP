var instrucciones = [
  "Utiliza las flechas del teclado para mover las piezas del rompecabezas.",
  "Para ordenar las piezas guiate por la imagen Objetivo",
  "¡Diviértete!"
];

//vamos a guardar dentro de una variable los movimientos del rompecabezas
var moviminetos = [];
//vamos a crear una matriz para saber las posiciones del rompecabezas
var rompe = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//vamos a tener que crear una matriz donde tengamos las posiciones correctas
var rompeCorrecta = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//necesito saber las coordenadas de la pieza vacia, la que se va a mover
var filaVacia = 2;
var columnaVacia = 2;

//funcion que se encargue de mostrar las instrucciones
function mostrarInstrucciones(instrucciones) {
  for (var i = 0; i < instrucciones.length; i++) {
    mostrarInstruccionesLista(instrucciones[i], "lista-instrucciones"); 
  }
}

//Esta fncinion se encarga de mostrar las instrucciones en una lista
function mostrarInstruccionesLista(instruccion, idLista) {
  var ul = document.getElementById(idLista);
  var li = document.createElement("li");
  li.textContent = instruccion;
  ul.appendChild(li);
}

function checarSiGano() {
  for (var i = 0; i < rompe.length; i++) {
    for (var j = 0; j < rompe[i].length; j++) {
      var rompeActual = rompe[i][j];
      if(rompeActual !== rompeCorrecta[i][j]) {
        return false;
      }
    }
  }
  return true;
}

//Mostrar en html si se gano
function mostrarCartelGanador() {
  if(checarSiGano()) {
    alert("¡Ganaste!");
  }
  return false
}

/*
  Necesitamos una funcion que se encarge de poder intercambiar las posiciones de la piza vacia vs cualquiera, para eso debemos hacer el uso de:
  arreglo[][] = posicion[][]
  intercambiar 
  posicione[][] = arreglo[][]
*/

function intercambiarPosicionesRomepecabezas(filaPos1, columnaPos1, filaPos2, columnaPos2) {
  var pos1 = rompe[filaPos1, columnaPos1];
  var pos2 = rompe[filaPos2, columnaPos2];

  //intercambio
  rompe[filaPos1, columnaPos1] = pos2;
  rompe[filaPos2, columnaPos2] = pos1;
}

//funcion que se encargue de saber donde esta la pieza vacia
function actualizarPosicionVacia(nuevaFila, nuevaColumna){
  filaVacia = nuevaFila;
  columnaVacia = nuevaColumna;
}

//necesitamos limiatar la posicion del rompecabezas
function posicionValida(fila, columna){
  return (fila >= 0 && fila <= 2 && columna >= 0 && columna <=2);
}

//debemos crear una fuuncion que se encargue del movimiento detectando el evento de las flechas de navegacion.
//debemos crear una matriz de identificacion de mov
//arriba 38, abajo 40, izquierda 37, derecha 39
var codigosDireccion = {
  IZQUIERDA :37, 
  ARRIBA: 38,
  DERECHA: 39,
  ABAJO: 40
}; //FORMATO JSON

function moverEnDireccion(direccion){
  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;

  //si se mueve
  if(direccion === codigosDireccion.ABAJO){
    nuevaFilaPiezaVacia = filaVacia + 1;
    nuevaColumnaPiezaVacia = columnaVacia;
  }else if(direccion === codigosDireccion.ARRIBA){
    nuevaFilaPiezaVacia = filaVacia -1;
    nuevaColumnaPiezaVacia = columnaVacia
  }else if(direccion === codigosDireccion.DERECHA){
    nuevaFilaPiezaVacia = filaVacia;
    nuevaColumnaPiezaVacia = columnaVacia + 1;
  }else if(direccion === codigosDireccion.IZQUIERDA){
    nuevaFilaPiezaVacia = filaVacia;
    nuevaColumnaPiezaVacia = columnaVacia - 1;
  }

  //solo mando a llamar a que la posicion sea valida
  if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
    //tengo que hacer una funcion que se encargue de intercambiar las posiciones
    intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    //tengo que guardar el ultimo movimiento
    agregarUltimoMovimiento(direccion);
  }
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
  var pieza1 = rompe[fila1, columna1];
  var pieza2 = rompe[fila2, columna2];
  //intercambio ya debe de ser por parte de los frames y el html
  intercambiarPosicionesRomepecabezas(fila1, columna1, fila2, columna2);
  intercambiarPosicionesDOM('pieza'+pieza1[fila1, columna1], 'pieza'+pieza2[fila2, columna2])
}

function intercambiarPosicionesDOM(idPieza1, idPieza2){
  var pieza1 = document.getElementById(idPieza1.toString())
  var pieza2 = document.getElementById(idPieza2.toString())
  console.log(pieza1)
  var elementoPieza1 = pieza1.parentNode;
  var elementoPieza2 = pieza2.parentNode;
  var cloneElemento1 = elementoPieza1.cloneNode(true);
  var cloneElemento2 = elementoPieza2.cloneNode(true);

  //reempelzar a los planes con sus clones
  padre.replaceChild(cloneElemento1,  elementoPieza2);
  padre.replaceChild(cloneElemento2,  elementoPieza1);
}

//funcion para actualizar las movimientos en el DOM
function actualizarUltimoMovimiento(direccion){
  var ultimoMovimiento = document.getElementById('flecha');
  switch(direccion){
    case codigosDireccion.ARRIBA:
      ultimoMovimiento.textContent = "↑"
      break;
    case codigosDireccion.ABAJO:
      ultimoMovimiento.textContent = "↓";
      break
    case codigosDireccion.IZQUIERDA:
      ultimoMovimiento.textContent = "←"
      break;
    case codigosDireccion.DERECHA:
      ultimoMovimiento.textContent = "→";
      break
  }
}

//necesitamos mezclar todas las piezas
function mezclasPiezas(veces){
  if(veces <= 0){
    return alert('Asi no se puede')
  }

  var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA]
  var direccion = direcciones[Math.floor(Math.random() * direcciones.length)]

  moverEnDireccion(direccion)

  setTimeout(function(){
    mezclasPiezas(veces - 1 )
  }, 100);
}

//necesitamos saber uqe piezas se estan moviendo
function capturarTeclas(){
  document.body.onkeydown = (function(evento){
    if(evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.DERECHA || evento.which === codigosDireccion.IZQUIERDA){
      moverEnDireccion(evento.which);
      //saber si gane
      var gano = checarSiGano();
      if(gano){
        setTimeout(function(){
          mostrarCartelGanador();
        },500);  
      }
      evento.preventDefault();
    }
  });
}

function iniciar() {
  //mezclas las piezas del rompecabezas
  mezclasPiezas(30);
  capturarTeclas();
  //capturar el ultimo moviimiento

}

iniciar();

//mandamos traer la funcion que muestra las instrucciones
mostrarInstrucciones(instrucciones);