function validarn (e){
  var teclado  = (document.all) ? e.keyCode : e.which ;
  if(teclado == 8){
    return true
  }
  var patron = /[0-9\d .]/
  var codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function interes(){
  var valor = document.getElementById("cantidadi").value;
  var parseo = parseFloat(valor);
  if(parseo < 100 || parseo > 1000000000) return alert('Ingrese un valor entre 100 y 10 mil millones'); //validacion de cantidad
  var interes = parseo*0.085; //limite a 2 decimales
  var total  = interes + parseo;
  document.getElementById("saldoi").value = "$ " + total; //limite a 2 decimales
}

function borrarCampos(){
  document.getElementById("saldoi").value = "";
  document.getElementById("cantidadi").value = "";
}