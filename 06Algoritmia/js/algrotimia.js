function problema1(){
  const datos = document.getElementById('p1-input').value;
  const resultado = datos.trim().split(" ").map((dato) => dato.split('').reverse().join('')).toString()
  document.getElementById('p1-output').textContent = resultado
}

function problema2(){
  //jimmy
}

function problema3(){
  const datos = document.getElementById('p3-input').value;
  let letras = [];
  let resultado = 0;
  let palabra = "";
  
  let logica = datos.trim().split(',')
  .map(valor => valor.split(''))
  .forEach(arregloLetra => {
    letras = []
    arregloLetra.forEach(letra=> {
      if(!letras.includes(letra)) letras.push(letra)
    })
    if(letras.length > resultado){
      resultado = letras.length;
      palabra = arregloLetra.join('');
    }
  });
  
  document.getElementById('p3-output').textContent = palabra;
}