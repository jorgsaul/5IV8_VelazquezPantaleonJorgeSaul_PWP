function calcularEdad() {
  var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
  var hoy = new Date();
  if (!fechaNacimiento) return alert('Por favor, seleccione una fecha'); //validacion campos vacios
  if (isNaN(fechaNacimiento))return alert('Fecha no válida');//validacion de la fecha

  var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  var mes = hoy.getMonth() - fechaNacimiento.getMonth();
  var dia = hoy.getDate() - fechaNacimiento.getDate();

  if (mes < 0 || (mes === 0 && dia < 0)) edad--;
  if(edad < 0) return alert('Ingrese una fecha anterior al dia de hoy') //validacion futuro

  document.getElementById('edadCalculada').value = `${edad} años`;
}

function borrarCampos() {
  document.getElementById('fechaNacimiento').value = '';
  document.getElementById('edadCalculada').value = '';
}