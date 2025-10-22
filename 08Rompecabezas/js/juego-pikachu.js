var instrucciones = [
  "Utiliza las flechas del teclado para mover las piezas del rompecabezas.",
  "Para ordenar las piezas guiate por la imagen Objetivo",
  "¡Diviértete!"
];

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

//vamos a crear una matriz para saber las posiciones del rompecabezas
var rompe = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//necesito saber las coordenadas de la pieza vacia, la que se va a mover
var filaVacia = 2;
var columnaVacia = 2;

function intercambiarPosicionesRomepecabezas(filaPos1, columnaPos1, filaPos2, columnaPos2) {
  var pos1 = rompe[filaPos1][columnaPos1];
  var pos2 = rompe[filaPos2][columnaPos2];

  //intercambio
  rompe[filaPos1][columnaPos1] = pos2;
  rompe[filaPos2][columnaPos2] = pos1;
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
  }else{
    return false;
  }

  //solo mando a llamar a que la posicion sea valida
  if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
    //tengo que hacer una funcion que se encargue de intercambiar las posiciones
    intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    //tengo que guardar el ultimo movimiento
    agregarUltimoMovimiento(direccion);
  }else{
    return true
  }
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
  var pieza1 = rompe[fila1][columna1];
  var pieza2 = rompe[fila2][columna2];
  //intercambio ya debe de ser por parte de los frames y el html
  intercambiarPosicionesRomepecabezas(fila1, columna1, fila2, columna2);
  intercambiarPosicionesDOM('pieza'+pieza1, 'pieza'+pieza2)
}

function intercambiarPosicionesDOM(idPieza1, idPieza2){
  var pieza1 = document.getElementById(idPieza1);
  var pieza2 = document.getElementById(idPieza2);

  var padre1 = pieza1.parentNode;
  var padre2 = pieza2.parentNode;

  var siguiente1 = pieza1.nextSibling;
  var siguiente2 = pieza2.nextSibling;

  padre1.insertBefore(pieza2, siguiente1);
  padre2.insertBefore(pieza1, siguiente2);
}

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
  capturarTeclas();
  //capturar el ultimo moviimiento

}

iniciar()

mostrarInstrucciones(instrucciones)