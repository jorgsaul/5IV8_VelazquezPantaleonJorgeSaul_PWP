function validarn (e){
  var teclado  = (document.all) ? e.keyCode : e.which ;
  if(teclado == 8){
    return true
  }
  var patron = /[0-9\d]/
  var codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function calificacion(){
  var parcial1 = document.getElementById('parcial1').value
  var parcial2 = document.getElementById('parcial2').value
  var parcial3 = document.getElementById('parcial3').value
  var examen = document.getElementById('examen').value
  var proyecto = document.getElementById('proyecto').value
  let lista = [parcial1, parcial2, parcial3, examen, proyecto]
  const validacion = valor =>{
    if(!valor){
      alert('Llene los campos solicitados')
      return false
    }
    if(parseInt(valor)<0 || parseInt(valor)>100) {
      alert('Todas los campos se evaluan sobre 100')
      return false
    }
    return true
  }
  if(!lista.every(validacion)) return;
  lista = lista.map(valor => parseInt(valor));
  const resultado = (((lista[0] + lista[1] + lista[2])/3)*0.55) + (0.3*lista[3]) + (0.15 * lista[4]);

  document.getElementById('calificacionFinal').value = resultado

}