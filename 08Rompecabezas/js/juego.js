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

function iniciar() {
  //mezclas las piezas del rompecabezas
  //capturar el ultimo moviimiento

}

//mandamos traer la funcion que muestra las instrucciones
mostrarInstrucciones(instrucciones);