function validarn (e){
  var teclado  = (document.all) ? e.keyCode : e.which ;
  if(teclado == 8){
    return true
  }
  var patron = /[0-9\d .]/
  var codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function comision(){
  var sueldo = document.getElementById('sueldo').value;
  var ventas = document.getElementById('nventas').value;
  if(!sueldo || !ventas) return alert('Llene los campos solicitados') //validacion de campos vacios
  var sueldoFloat = parseFloat(sueldo);
  var ventasInt = parseInt(ventas);
  if (sueldoFloat < 300 || sueldoFloat > 50000) return alert('Ingrese un sueldo entre 300 y 500 mil pesos')  
  if(ventasInt < 1 || ventasInt > 200) return alert('El sistema solo admite hasta 200 ventas')
  var resultado = sueldoFloat + sueldoFloat * (ventasInt * .10);
  document.getElementById('sueldoTotal').value = `$ ${resultado.toFixed(2)}`;
}


function borrarCampos(){
  document.getElementById("sueldo").value = "";
  document.getElementById("nventas").value = "";
  document.getElementById('sueldoTotal').value = "";
}