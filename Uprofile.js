/*Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
Store the information and then showcase it in the console. 
Take note that the output for the films should add a small message like: 
'The film {film} is one of my favorites'.*/

let userName = prompt ("¿Cuál es tu nombre de usuario");
//El prompt userName pregunta el nombre de usuario
console.log ("Hola, " + userName + "!");//Indica el nombre de usuario en la consola
let ageUser = prompt ("¿Cuál es tu edad");
//El prompt agerUse se refiere a la edad del usuario
console.log ("Tu edad es, " + ageUser + " que joven eres.");
let movieList = prompt ("¿Cúales son tus 3 peliculas favoritas?, por favor anotalas separando con comas :) ");
console.log ("Tus peliculas favoritas son: " + movieList);
let movie = movieList.split(',');
let firstMo=movie[0];//Indica que el primer resultado que es indice 0, será el que retorne

alert("Hola   "+  userName  + "  tienes   " + ageUser + "  años.  " + "La película  "  + firstMo + "  también es mi favorita. ");
//Agregar separaciones dentro de las comillas, para que el texto no salga todo junto.