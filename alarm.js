let segUser = prompt("¿En cuántos segundos quieres que aparezca la alarma?... ");

let miliSeg= (parseInt(segUser, 10)) *  1000; //se convierte el tiempo de segundos a milisegundos
    
console.log("Los segundos son "+ segUser + " que son " + miliSeg + " milisegundos");
setTimeout(() => {
    alert("¡El tiempo especificado ha pasado!");
}, miliSeg); //Escrito de esta forma es funcional, si se escribe -> setTimerout(alert("mensaje"), miliSeg), la alerta sale enseguida.


