function validarn (e){
  var teclado  = (document.all) ? e.keyCode : e.which ;
  if(teclado == 8){
    return true
  }
  var patron = /[0-9\d .]/
  var codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function oferta(){
  var monto = document.getElementById('compra').value;
  if(!monto) return alert('Ingrese el monto') //validacion campos vacios
  var montoFloat = parseFloat(monto);
  if(montoFloat<20 || montoFloat>50000) return alert('Ingrese un monto de entre 20 y 50 mil pesos'); //limitar el monto
  document.getElementById('compraFinal').value = (montoFloat * 0.85).toFixed(2) //limitar a 2 decimas
}

function borrarCampos(){
  document.getElementById("compra").value = "";
  document.getElementById("compraFinal").value = "";
}