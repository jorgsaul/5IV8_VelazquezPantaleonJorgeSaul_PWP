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
  alert(parseo)
  var interes = parseo*0.085; //limite a 2 decimales
  alert(interes)
  var total  = interes + parseo;
  alert(total)
  document.getElementById("saldoi").value = "$ " + total; //limite a 2 decimales
}

function borrarCampos(){
  document.getElementById("saldoi").value = "";
  document.getElementById("cantidadi").value = "";
}