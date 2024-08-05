let multiDimension = [1, [2, 3, [4, 5, [6]]]];

//para permitir el aplanamiento a nivel profundo use recursión con reduce y concat
/*documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
*/
/*El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados 
recursivamente hasta la profundidad especificada*/

function deepFlat(multiDimension) {
    return multiDimension.reduce(
      (acc, val) =>
        Array.isArray(val) ? acc.concat(deepFlat(val)) : acc.concat(val),
      [],
    );
  }
  deepFlat(multiDimension); // [1, 2, 3, 4, 5, 6]
  console.log(deepFlat(multiDimension));
  
