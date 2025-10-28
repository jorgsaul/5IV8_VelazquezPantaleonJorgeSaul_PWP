/*
Este es un ejemplo de una api REST utilizando una llamada con fetch, el cual sirve para obtener informacion sobre el tipo de api, en este caso de pokemon y obtener su estructura a partir de crear una funcion callback con una promesa.
*/

const pokeApiUrl = "https://pokeapi.co/api/v2/";

//vamos a crear una funcion para obtener todos los datos de la pokedex, para esto tenemos que imaginar el orden y la obtencion de los datos.

const pokedex = ()=>{
  //primero necesitamos obtener todas las estadisiticas del pokemon, asi que necesitamos crear un diccionario para obtener cada uno de los elementos del front para despues vaciar los datos
  const pokemonStatsElements = {
    hp: document.getElementById('pokemonStatHp'),
    attack: document.getElementById('pokemonStatAttack'),
    defense: document.getElementById('pokemonStatDefense'),
    specialAttack: document.getElementById('pokemonStatSpecialAttack'),
    specialDefense: document.getElementById('pokemonStatSpecialDefense'),
    speed: document.getElementById('pokemonStatSpeed')
  };

  //necesitamos un auxiliar que nos permita utilizar la clase del tipo de pokemon
  let currentClassType = null;
  //tienen que cambiar los elementos de la imagen, para ello tenemos que crear un template que se encargue de encadenar los datos
  const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay' />";
  //necesitamos un objeto que se encargue de guardar las rutas de las imagenes que vamos a cambiar dependiendo de si es una busqueda, si lo encontro o no al pokemon.
  const imagenes = {
    imgPokemonNotFound : "../img/404.png",
    imgLoading : "../img/loading.gif"
  };
  //necesitamos una variable que guarde todos los contenedores de la pokedex
  const containers = {
    imagenContainer : document.getElementById('pokedisplay-container'),
    pokemonTypesContainer: document.getElementById('pokemonTypes'),
    pokemonNameElement: document.getElementById('pokemonNameResult'),
    pokemonAbilitiesElement: document.getElementById('pokemonAbilities'),
    pokemonMovesElement: document.getElementById('pokemonMoves'),
    pokemonIdElements: document.getElementById('pokemonId')
  };
  //necesitamos un objeto de tipo array que guarde los botones con su tipo de referencia
  const buttons = {
    all: Array.from(document.getElementsByClassName('btn')),
    search : document.getElementById("btnSearch"),
    next : document.getElementById('btnUp'),
    prev: document.getElementById('btnDown')
  };
  //para buscar a un pokemon necesitamos una variable que guarde el nombre del pokemon
  const pokemonInput = document.getElementById('pokemonName');
  //la agrupacion de los elementos en este objeto, debe de ser una estructura que nos permita crear funciones mas pequeñas que sin importar el orden puedan obtener cada uno de los datos solicitados.
  const processPokemonType = (pokemonData)=>{
    //Primero necesitamos obtener el tipo de pokemon, nombre y la clase, para que se modifique en el html. Ya que tengamos eso tenemos que obtener los stats, moves, abilities 
    let pokemonType = "";
    //utilizo una busqueda la clase de pokemon, eso se refiere al tipo de pokemon
    const firstClass = pokemonData.types[0].type.name;
    pokemonData.type.forEach(pokemonTypeData => {
      //necesito obtener la etiqueta de cada cambio
      pokemonType += `<span clas ="pokemon-type ${pokemonTypeData.type.name}" >${pokemonTypeData.type.name}</span>`;
    });
    //para poder quitar y cambiar el contenedor dependiendo del tipo tengo que saber a cual pertenece
    if(currentClassType){
      containers.pokemonMovesElement.classList.remove(currentClassType)
      containers.pokemonAbilitiesElement.classList.remove(currentClassType)
    }//ahora tengo que agregar lo nuevo
    containers.pokemonMovesElement.classList.add(firstClass)
    containers.pokemonAbilitiesElement.classList.add(firstClass)

    //Debo de agregar las etiquetas creadas dentro del forEach
    containers.pokemonTypesContainer.innerHTML = pokemonType;
  };

  //ahora necesitamos obtener las estadisticas del pokemon
  const processPokemonStats = pokemonData =>{
  pokemonData.stats?.forEach(pokemonStatData => {
    //vamos a evaluar si encuentra el nombre de la estadisitica para colocarlo en su contenedor correspondiente
    switch(pokemonStatData.stat.name){
      case 'hp':
        pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'attack':
        pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'defense':
        pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'special_attack':
        pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'special_defense':
        pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'speed':
        pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
    }
    
  });
  }
}