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
  var meses = document.getElementById('meses').value;
  if(!valor || !meses) return alert('Llene los campos solicitados') //validacion de campos vacios
  var parseo = parseFloat(valor);
  if(parseo < 100 || parseo > 1000000000) return alert('Ingrese un valor entre 100 y 10 mil millones de pesos'); //validacion de cantidad
  var interes = parseo*0.02; //limite a 2 decimales
  var total  = interes + parseo;
  parseo = parseFloat(meses);
  if(parseo <3 || parseo > 18) return alert('La inversion debe de ser de minimo 3 y maximo 18 meses')
  document.getElementById("saldoi").value = "$ " + total; //limite a 2 decimales
}

function borrarCampos(){
  document.getElementById("saldoi").value = "";
  document.getElementById("cantidadi").value = "";
}