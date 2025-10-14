const operacionNumeros = (numero1, numero2, operacion) => {
  switch(operacion){
    case "suma":
      return numero1 + numero2;
    case "resta":
      return numero1 - numero2;
    case "multiplicacion":
      return numero1 * numero2;
    case "division":
      return numero1 / numero2;
  }
}

function funcionNumeros(){
  const numero1 = parseFloat(document.getElementById("numero1-input").value);
  const numero2 = parseFloat(document.getElementById("numero2-input").value);
  let resultado = 0;
  if(!numero1 || !numero2) alert("Por favor ingresa ambos numeros");
  if(numero1 === numero2) resultado = operacionNumeros(numero1, numero2, "multiplicacion");
  if(numero1 > numero2) resultado = operacionNumeros(numero1, numero2, "resta");
  if(numero1 < numero2) resultado = operacionNumeros(numero1, numero2, "suma");
  const arreglo = [numero1, numero2, resultado].sort().reverse();
  document.getElementById('p1-output').textContent = resultado.toString();
  console.log(arreglo[0]);
}

function funcionHoras(){
  const horas = parseFloat(document.getElementById("p1-input").value);
  const sueldoPorHora = 16;
  let resultado = 0;
  if(!horas) alert("Por favor ingresa las horas trabajadas");
  if(horas <= 40) alert('Menos de 40 horas trabajadas, no hay horas extras');
  if(horas > 40) resultado = operacionNumeros(horas - 40, sueldoPorHora, "multiplicacion") * 2 + (40 * sueldoPorHora);
  if(horas > 48) resultado = operacionNumeros(horas - 48, sueldoPorHora, "multiplicacion") * 3 + (8 * sueldoPorHora * 2) + (40 * sueldoPorHora);
  document.getElementById('p2-output').textContent = resultado.toString();
}
/*
function suma(n1, n2){
  return n1 + n2;
}

console.log(`Qee rollo ${suma(5,4)}`)

/*Las funciones felchas, nos ayudan a poder realizar operaciones de una forma mucho mas sencilla, de acuerdo a la siguiente estrcuutria "cadena" => id, clase, metodo, nombre, atributo.*/
/*
const suma = (n1,n2) => n1 + n2;
console.log(`Qee rollo ${suma(5,4)}`)


const razasDePerros = [
  "Pastor aleman",
  "Labrador Retriever",
  "Bulldog Frances",
  "Beagle",
  "Chihuahua",
  "Dalmata",
  "Salchicha",
  "Pug"
]

/*formas de recorrer e imprimir los elementos de un arreglo 

for(let i = 0; i< razasDePerros.length; i++){
  console.log(razasDePerros[i]);
}


//for of
for(const raza of razasDePerros){
  console.log(raza)
}

//for in
for(const indice in razasDePerros){
  console.log(razasDePerros[indice]);
}


//for each itera sobre los elementos del arreglo y no devuelve nada
//todos los for each son funciones flecha por defecto
razasDePerros.forEach(raza => console.log(raza))
//La estructura general del for each es la siguiente
// argumento.foreach((raza, indice, arregloOriginal) => {codigo a ejecutar})
const razasDePerrosMayuscuulas = razasDePerros.map(raza => raza.toUpperCase())


//Find nos permite realizar una busqueda de un elemento dentro de larreglo, si lo enuentra lo retorna sino lo encuentra retorna undefined

if(razasDePerros.find(raza => raza === "Chihuahua")){
  console.log('Si se se encontro');
  console.log(razasDePerros)
}else{
  razasDePerros.push("Chihuahua");
  console.log(razasDePerros)
}


//Find Index => nos permmite realizar unabusqueda de un elemento de un elemento dentro de un arreglo, si l encuetra, regresa el indice del elemento, sino regresa un -1, esta funcion es particularmente util cuando necesitas modificar o eliminar un elemento de un arreglo original, dentro de una copia del mismo
const indiceChiwawa = razasDePerros.findIndex(raza => raza === "Chihuahua");
if(indiceChiwawa > -1){
  //Si se encontro
  console.log(razasDePerros[indiceChiwawa]);
  //aparte el voy adecir que agregue un texto a este resultado
  razasDePerros[indiceChiwawa] += "Es un perro bn chillon"
  console.log(razasDePerros[indiceChiwawa]);
  console.log(razasDePerros)
}

*/