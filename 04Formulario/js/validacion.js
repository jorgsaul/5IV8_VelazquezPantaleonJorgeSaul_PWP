/*
Javascript es un lenguaje multiparadigma
Acepta la programacion funcional, estrucutrada, POO,
Eventos
Dentro de js no existe el tipado de variables (int, string, float, etc)

Solo existen 3 tipos de variables
Estandar ES6
VAR, LET, CONST
*/

function validar(formulario){
  //quiero validar que el campo nombre acepte mas de 3 caracteres
  if(formulario.nombre.value.length < 4){
    alert('Porfavor escribe un nombre con mas de 3 caracteres');
    formulario.nombre.focus();
    return false;
  }

  var checkStr = formulario.nombre.value;

  if(checkStr){
    var abcOK = "QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm "
    var allValido = true;

    //tenemos que comparar la cadena de nombre vs abc
    for(var i = 0; i<checkStr.length; i++){
      var caracteres = checkStr.charAt(i);
      for(var j = 0; j<abcOK.length; j++){
        if(caracteres == abcOK.charAt(j)){
          break
        }
      }

      if (j == abcOK.length){
        allValido = false;
        break;
      }

    }

    if(!allValido){
      alert('escriba unicamente letras en el campo nombre')
      formulario.nombre.focus();
      return false
    }
  }

  checkStr = formulario.nombre.edad;

  if(checkStr){
    var abcOK = "123456789"
    var allValido = true;

    //tenemos que comparar la cadena de nombre vs abc
    for(var i = 0; i<checkStr.length; i++){
      var caracteres = checkStr.charAt(i);
      for(var j = 0; j<abcOK.length; j++){
        if(caracteres == abcOK.charAt(j)){
          break
        }
      }

      if (j == abcOK.length){
        allValido = false;
        break;
      }

    }

    if(!allValido){
      alert('escriba unicamente digitos en el campo nombre')
      formulario.edad.focus();
      return false
    }
  }
  
  //vamos a crear una funcion de una expresion regular para validar el correo electronico
  //texto.texto@texto.texto

  var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
  var txt = formulario.correo.value;

  alert("email " +( b.test(txt) ? " ": " no ") +"valido")
  return b.test;
}