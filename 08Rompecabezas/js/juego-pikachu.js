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

mostrarInstrucciones(instrucciones)