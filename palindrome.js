let wriWord = prompt ("Por favor escribe una palabra u oración ");

function esPalindrom(textw) {
    textw = textw.toLowerCase();//toLowerCase convierte una cadena de texto especificada a una nueva compuesta solo por minúsculas
    
    textw = textw.replace(/[^a-z]/g, '');//Elimina caracteres no alfabeticos para que al comprobar si es un palindromo no afecten.
    
    return textw === textw.split('').reverse().join(''); //Compara la cadena original con su reverso
    /*Split Devuelve un nuevo array - divide la cadena en subcadenas
    reverse - método de array que invierte el orden de los elementos en la matriz
    join - une todos los elementos de una matriz en una cadena y devuelve esta cadena */
}
 //Verificar si la entrada es un palíndromo
if (esPalindrom(wriWord)) {
    alert("¡Tu palabra u oración es un palíndromo c: !");
} else {
    alert("Tu palabra u oración NO es un palíndromo. :c ");
}
    

