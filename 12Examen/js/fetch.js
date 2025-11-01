const proxy = "https://cors-anywhere.herokuapp.com/";
const API_URL_PLANTS = proxy + "https://pvz-2-api.vercel.app/api/plants/";
const API_URL_ZOMBIES = proxy + "https://pvz-2-api.vercel.app/api/zombies/";

const statsPlant = {
  cost: 0,
  recharge: 0,
  damage: 0,
  toughness: 0,
  powerUp: 0,
  family: 0,
  description: 0,
  image: 0
};
const statsZombie = {
  toughness: 0,
  speed: 0,
  description: 0,
  image: 0,
}

let currentType = null;

const imageTemplate = "<img src='{imgSrc}' alt='imagenDelPersonaje' />";
const statsTemplate = (personaje, tipo) => `
  <div class="stats ${tipo === "planta" ? "planta" : "zombie"}">
    ${tipo === "planta" ? `
      <p>Coste: ${personaje.cost}</p>
      <p>Recarga: ${personaje.recharge}</p>
      <p>Daño: ${personaje.damage}</p>
      <p>Toughness: ${personaje.toughness}</p>
      <p>Power Up: ${personaje.powerUp}</p>
      <p>Familia: ${personaje.family}</p>
    ` : `
      <p>Toughness: ${personaje.toughness}</p>
      <p>Velocidad: ${personaje.speed}</p>
    `}
    <p>Descripción: ${personaje.description}</p>
  </div>
`;

const containers = {
  imagenContainer: document.getElementById("pokedisplay-container"),
  dataContainer: document.getElementById("dataContainer")
};

async function obtenerPlanta(nombre) {
  try {
    const response = await fetch(`${API_URL_PLANTS}${nombre}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function obtenerZombie(nombre) {
  try {
    const response = await fetch(`${API_URL_ZOMBIES}${nombre}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function obtenerPersonaje(){
  const personaje = document.getElementById("busqueda").value.trim();
  console.log(personaje)
}