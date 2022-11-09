// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

//  return array.pop(); una forma pero perderia el elemento
  return array[array.length-1]
  // aca le doy la ultima posicion , se que con length tengo el valor total de lementos del arreglo, le resto 1 por que enpiesa en 0 y consigo tener la posicion del ultimo. 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  //var entero = []; va para el primer codigo inicio el nuevo array donde guargo los resutados
  for (var i = 0; i < array.length; i++) {
// de esta forma verifico que sea un numero entero y le sumo 1 dependiendo si es + o - 
  //   if (array[i] % 1 === 0 && array[i] < 0) {
  //     entero[i] = array[i] - 1
  //   } else {
  //     if (array[i] % 1 === 0 && array[i] > 0) {
  //       entero[i] = array[i] + 1

  //     }
  //   }
  // }
  // return entero;
array[i]+=1
//le sumo 1 al array y lo guardo. 
}
// salgo del for e imprimo el array modificado
return array;
}
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = "";
  for (i = 0; i < palabras.length - 1; i++) {
    frase = frase + palabras[i] + " ";
  }
  frase = frase + palabras.pop();
  return frase;
}
// una manera mas sencilla es usar la funcion "join" que me une los elementos de una array
// return palabras.join(" ") entre los parentesis va lo que quiero intercalar entre los elementos.

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // usando do while
//   let i = 0
//   do {
//     if (elemento === array[i]) {
//       return true;
//     } else {
//       i++
//     }

//   } while (i < array.length);
//   return false;

// }
// usando for
for (var i=0; i<array.length; i++){
  if (array[i]===elemento){
    return true;
  }
}
return false
}
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var entero = 0;
  for (var i = 0; i < numeros.length; i++) {
    //entero += Math.floor(numeros[i]) en esta linea me aseguro de sumar la parte entera si no lo fuera.
    entero+=numeros[i];

  }
  return entero;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var cant = 0;
  var suma = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += (resultadosTest[i]);
    


  }
  return suma / resultadosTest.length;
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (mayor > numeros[i]) {
      mayor = mayor
    } else {
      mayor = numeros[i];
    }
  } return mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var multi = 1;

  if (arguments.length < 1) {
    return 0;
  } else {
    for (var i = 0; i < arguments.length; i++) {
      if (arguments.length > 1) {
        multi *= arguments[i];
      }
      else {
        return arguments[i]

      }
    }
  }
  return multi;
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayor = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      mayor.push(arreglo[i]);
    }
  }
  return mayor.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }
  else {
    if (numeroDeDia > 1 && numeroDeDia < 7) {
      return "Es dia Laboral";
    }
  }
}





function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
var tranformaAstring= n + "";
if (tranformaAstring[0]==="9"){
  return true;
} else{ return false;
}

}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let elemento = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (elemento !== arreglo[i]) {
      return false; 
    }
  }
 return true;   
}
    
      



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let pedido = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] === "Enero") {
      pedido.push(array[i]);
    } else {
      if (array[i] === "Marzo") {
        pedido.push(array[i]);
      }
      else {
        if (array[i] === "Noviembre")
          pedido.push(array[i]);
      }
    }
  }

  if (pedido.length === 3) {
    return pedido;

  } else { return "No se encontraron los meses pedidos" }

}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayores = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayores.push(array[i]);
    }
  }
  return mayores;
}





function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  var nuevoArray = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma += 2 
    if (suma === i) break;
      
    nuevoArray.push(suma)
      }

  if (i<10) {
    return "Se interrumpió la ejecución";
  }else { return nuevoArray;
  }
}
        


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  var nuevoArray = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    if (i === 5) continue;
    //salta el push
    else{
      suma+=2
     nuevoArray.push(suma)
    }
  }
   return nuevoArray;
  }
    
      
      
    
   








  





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
