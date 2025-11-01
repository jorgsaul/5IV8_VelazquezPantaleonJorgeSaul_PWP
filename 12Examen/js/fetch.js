const proxy = "https://cors-anywhere.herokuapp.com/";
const API_URL_PLANTS = proxy + "https://pvz-2-api.vercel.app/api/plants/";
const API_URL_ZOMBIES = proxy + "https://pvz-2-api.vercel.app/api/zombies/";
const BASE_URL = "https://pvz-2-api.vercel.app";
const card = document.getElementById("contenedor");

let currentType = null;

const imageTemplate = (imgSrc) => `<img src='${BASE_URL}${imgSrc}' alt='imagenDelPersonaje' />`;
const cardTemplate = (objeto) => `
  <div class="stats">
    ${Object.keys(objeto).map(key =>`<p>${key}: ${objeto[key]}</p>`).join('')}
  </div>
`

async function obtenerPlanta(nombre) {
  const response = await fetch(`${API_URL_PLANTS}${nombre}`);
  if (!response.ok) throw new Error('No se encontró la planta');
  const data = await response.json();
  return data;
}

async function obtenerZombie(nombre) {
  const response = await fetch(`${API_URL_ZOMBIES}${nombre}`);
  if (!response.ok) throw new Error('No se encontró el zombie');
  const data = await response.json();
  return data;
}

async function obtenerPersonaje() {
  currentType = null;
  const personaje = document.getElementById("busqueda").value.trim();
  try {
    const planta = await obtenerPlanta(personaje);
    currentType = "planta";
    colocarDatos(planta);
  } catch {
    try {
      const zombie = await obtenerZombie(personaje);
      currentType = "zombie";
      colocarDatos(zombie);
    } catch {
      console.log('❌ No se encontró el personaje');
    }
  }

  cambiarFondo(currentType);
}

function colocarDatos(personaje){
  console.log(personaje);
  card.innerHTML = "";
  card.insertAdjacentHTML("beforeend", imageTemplate(personaje.image));
  card.insertAdjacentHTML("beforeend", cardTemplate(personaje));
}
function cambiarFondo(currentType){
  if(currentType === "planta"){
    card.className = "card planta";
  }else if(currentType === "zombie"){
    card.className = "card zombie";
  }
}
