const proxy = "https://cors-anywhere.herokuapp.com/";
const API_URL_PLANTS = proxy + "https://pvz-2-api.vercel.app/api/plants/";
const API_URL_ZOMBIES = proxy + "https://pvz-2-api.vercel.app/api/zombies/";
const BASE_URL = "https://pvz-2-api.vercel.app";
const card = document.getElementById("contenedor");

let currentType = null;

const imageTemplate = (imgSrc) => `<img src='${imgSrc}' alt='imagenDelPersonaje' />`;
const cardTemplate = (objeto) => `
  <div class="stats">
    ${Object.keys(objeto).map(key =>`<p><strong>${key}</strong>: ${objeto[key]}</p>`).join('')}
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
  await sugerencias();
  currentType = null;
  const personaje = document.getElementById("busqueda").value.trim();
  if(personaje === "") return alert('Ingrese el nombre de un personaje');
  showLoading();
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
      colocarDatos({name: "No se encontró el personaje", image: "./img/notfound.jpeg", state:"404"});
    }
  }
  cambiarFondo(currentType);
}

function colocarDatos(personaje){
  const { image, ...personajeSinImagen} = personaje;
  card.innerHTML = "";
  card.insertAdjacentHTML("beforeend", imageTemplate(personaje.state === "404" ? "./img/notfound.jpeg" : BASE_URL + personaje.image));
  card.insertAdjacentHTML("beforeend", cardTemplate(personajeSinImagen));
}
function showLoading() {
  card.innerHTML = "";
  card.insertAdjacentHTML("beforeend", imageTemplate("./img/loading.gif"));
  card.insertAdjacentHTML("beforeend", `<div class="stats"><p>Cargando...</p></div>`);
  card.className = "card";
}

function cambiarFondo(currentType){
  if(currentType === "planta"){
    card.className = "card planta";
  }else if(currentType === "zombie"){
    card.className = "card zombie";
  }else{
    card.className = "card";
  }
}
