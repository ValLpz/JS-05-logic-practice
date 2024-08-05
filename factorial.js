let numUs= prompt("escribe un número");
let x = parseInt(numUs);

let fact= n => {
    if (n <= 1) return 1
    return n * fact(n-1);

}
console.log(fact(x));
alert("El factorial es: " + (fact(x)));