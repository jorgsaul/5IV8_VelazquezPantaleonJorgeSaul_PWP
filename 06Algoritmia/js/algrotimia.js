function problema1(){
  const datos = document.getElementById('p1-input').value;
  const resultado = datos.trim().split(" ").map((dato) => dato.split('').reverse().join('')).toString()
  document.getElementById('p1-output').textContent = resultado
}

function problema2(){
  var p2_x1 = document.querySelector('#p2_x1').value
  var p2_x2 = document.querySelector('#p2_x2').value
  var p2_x3 = document.querySelector('#p2_x3').value
  var p2_x4 = document.querySelector('#p2_x4').value
  var p2_x5 = document.querySelector('#p2_x5').value

  var p2_y1 = document.querySelector('#p2_y1').value
  var p2_y2 = document.querySelector('#p2_y2').value
  var p2_y3 = document.querySelector('#p2_y3').value
  var p2_y4 = document.querySelector('#p2_y4').value
  var p2_y5 = document.querySelector('#p2_y5').value

  var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5]
  var v1 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5]
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