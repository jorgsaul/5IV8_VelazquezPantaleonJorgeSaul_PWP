const proxy = "https://cors-anywhere.herokuapp.com/";
const URL_API = proxy + 'https://eightballapi.com/api?locale=es'

function borrarCampos(){
  document.getElementById("pregunta").value = "";
}

function validarCampos(pregunta){
  let error = "";
  if(!pregunta) error = "Por favor ingresa una pregunta.";
  if (pregunta.length < 10) {
    error = "La pregunta debe tener al menos 10 caracteres.";
  }

  if (!/[a-zA-Z]/.test(pregunta)) {
    error = "La pregunta debe contener al menos una letra."; 
  }

  if (/^\d+$/.test(pregunta)) {
    error = "La pregunta no debe contener solo números.";
  }
  
  if(error){
    alert(error);
    return false;
  }

  return true
}

async function preguntar(){
  const pregunta = document.getElementById('pregunta').value.trim();
  if(!validarCampos(pregunta)) return;

  try {
    const response = await fetch(`${URL_API}&question=${pregunta}`);
    const data = await response.json();
    console.log(data)
    const respuesta = data.reading;
    document.getElementById('respuesta').value = respuesta;
  } catch (error) {
    alert('Error en la api, prueba activando la cors en el link de abajo')
    console.log(error);
  }
}