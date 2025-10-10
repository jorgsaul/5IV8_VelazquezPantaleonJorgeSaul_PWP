function validarn(e) {
  var teclado = (document.all) ? e.keyCode : e.which;
  if (teclado == 8) return true; // Permitir retroceso
  var patron = /[0-9\d]/; // Solo números
  var codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function calcularPorcentaje() {
  var mujeres = document.getElementById('mujeres').value;
  var hombres = document.getElementById('hombres').value;

  if (!mujeres || !hombres) return alert('Llene los campos solicitados'); // Validar campos vacíos
  var mujeresInt = parseInt(mujeres);
  var hombresInt = parseInt(hombres);

  if (mujeresInt < 0 || hombresInt < 0) return alert('Los valores deben ser mayores o iguales a 0');
  var total = mujeresInt + hombresInt;
  var porcentajeMujeres = (mujeresInt / total) * 100;
  var porcentajeHombres = (hombresInt / total) * 100;
  document.getElementById('porcentajeMujeres').value = `${porcentajeMujeres.toFixed(2)}%`;
  document.getElementById('porcentajeHombres').value = `${porcentajeHombres.toFixed(2)}%`;
}

function borrarCampos() {
  document.getElementById("sueldo").value = "";
  document.getElementById("nventas").value = "";
  document.getElementById('sueldoTotal').value = "";
}
