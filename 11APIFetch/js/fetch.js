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
    imgPokemonNotFound : "./img/404.png",
    imgLoading : "./img/loading.gif"
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
    pokemonData.types.forEach(pokemonTypeData => {
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
        pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(255, 0, 0, 1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'defense':
        pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(217, 255, 0, 1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'special_attack':
        pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(187, 0, 255, 1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'special_defense':
        pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(255, 0, 140, 1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
      case 'speed':
        pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
        pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(81, 255, 0, 1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`
        break;
    }
    
  });
  };

  const processPokemonAbilities = pokemonData =>{
    let pokemonAbilitiesContent = "";
    pokemonData.abilities?.forEach(pokemonAbilityData => {
      pokemonAbilitiesContent += `<li> ${pokemonAbilityData.ability.name} </li>`
    });
    containers.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
  };

  const processPokemonMoves = pokemonData =>{
    let pokemonMovesContent = "";
    pokemonData.moves?.forEach(pokemonMoveData => {
      pokemonMovesContent += `<li> ${pokemonMoveData.move.name} </li>`
    });
    containers.pokemonMovesElement.innerHTML = pokemonMovesContent;
  };
  //necesito poner la imagen de cargando y que tambien se deshabiliten los botones
  const setLoading = ()=>{
    containers.imagenContainer.innerHTML = imageTemplate.replace("{imgSrc}", imagenes.imgLoading);
    buttons.all.forEach(button =>{
      button.disabled = true;
    })
  };

  //necesito otra funcion qeu los habilite, no puedo hacer que simplemente se queden deshabilitados
  const setLoadingComplete = ()=>{
    buttons.all.forEach(button => checkDisabled(button));
  };
  //vamos a crear una promesa para poder obtener cada uno de los elementos de la pokedex, pero sin importar el orden, significa que cuand o se realize la peticion van a ser de tipo asincrona. Eso significa que va a atender sin importar el orden de la transferencia de los paquetes los datos del request, los va a procesar y despues armar, para ello utilizaremos una funcion de tipo fetch la cual como argumento principal va a necesitar la url de la api y despues una serie de then para procesar los datos.
  
  const getPokemonData = async pokemonName => {
    try {
      const res = await fetch(`${pokeApiUrl}pokemon/${pokemonName}`);
      //Cualquier peticion fetch por defecto es de tipo get, pero si qeuremos hacer otro tipo de peticiones tenemos que especificarlo en el segundo argumento. Pero cuando sea una BD entonces ya podemos moficiar el tipo de metodo post, put, delete, etc.
      //Despues del metodo es necesario el tipo de encabezado, las cabeceras son necesarias para que el servidor entienda que tipo de datos le estamos enviando y que tipo de datos esperamos recibir.
      if(!res.ok){
        return {requestFailed: true}
      }
      //si por ejemplo tiene elementos de formulario dentro del body, aqui se deben de incluir
      //body: JSON.stringify({})
      const data = await res.json();
      return data;
    } catch (error) {
      //en caso de que falle la peticion, devolvemos un objeto con una propiedad que indique que fallo la peticion
      console.error("Error en la petición:", error);
      return { requestFailed: true };
    }
  
  //necesitamos validar si se debe habilitar o deshabilitar los botones
  };
  const checkDisabled = button =>{
    //para cuando exista un id negativo
    button.disabled = button.id === "btnDown" && containers.pokemonIdElements.value <= 1
  };

  const limpiarDatos = () => {
    containers.pokemonNameElement.innerHTML = "Pokémon no encontrado 😢";
    containers.pokemonTypesContainer.innerHTML = "";
    containers.pokemonAbilitiesElement.innerHTML = "";
    containers.pokemonMovesElement.innerHTML = "";
    containers.pokemonIdElements.value = 0;

    Object.values(pokemonStatsElements).forEach(statEl => {
      statEl.innerHTML = 0;
      statEl.style = ""; // quitar el estilo anterior
    });
  }

  //la funcion qeu se encargue de ir armando los datos de la pokedex, entonces necesitamos validar, ya sea el id o el nombre del pokemon
  const setPokemonData = async pokemonName => {
    if(pokemonName){
      //poner la imagen de busqeuda y de deshabilitar los botones
      setLoading();
      //debo armar la consultar para determinar el orden de los datos
      const pokemonData = await getPokemonData(pokemonName.toLowerCase());
      //validar si la peticion fallo
      if(pokemonData.requestFailed){
        containers.imagenContainer.innerHTML = imageTemplate.replace("{imgSrc}" , imagenes.imgPokemonNotFound);
        limpiarDatos();
      }else{
        //ponemos todos los elementos
        containers.imagenContainer.innerHTML = `
          <img class="pokedisplay" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" />
          <img class="pokedisplay" src="${pokemonData.sprites.front_shiny}" alt="${pokemonData.name} shiny" />
        `;

        containers.pokemonNameElement.innerHTML = pokemonData.name;
        containers.pokemonIdElements.innerHTML = pokemonData.id;

        //repartir los de mas elementos
        processPokemonType(pokemonData)
        processPokemonStats(pokemonData)
        processPokemonAbilities(pokemonData)
        processPokemonMoves(pokemonData)
      }
      setLoadingComplete();
      return;
    }else{
      Swal.fire({
        icon:'error',
        title:'Error en tu busqueda',
        text:'Ingresa el nombre de un pokemon primero',
        confirmButtonText: 'Aceptar'
      });
    }
  }
    //la ultima funcion se encarga de vincular todas las busquedas con los botones
    const trigger = ()=>{
      buttons.search.onclick = () => setPokemonData(pokemonInput.value);
      //orientemos el evento
      pokemonInput.onkeydown = event => {
        if(event.key === "Enter"){
          event.preventDefault();
          setPokemonData(pokemonInput.value);
        }
      };
      buttons.prev.onclick = ()=> setPokemonData(Number(containers.pokemonIdElements.value) - 1);
      buttons.next.onclick = ()=> setPokemonData(Number(containers.pokemonIdElements.value) + 1);
    };

    
    trigger();
  
}

window.onload = pokedex;