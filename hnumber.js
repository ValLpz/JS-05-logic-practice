/*let tenNum = prompt("Por favor escriba una lista de diez números separando cada uno con una comas (,) ...");
console.log("Tú lista de números es: " + tenNum.split(','));//Indica la lista de números
//let listNu=tenNum.split(',');
let listUNum=(parseInt(tenNum));//Indica que la respuesta del usuario es un número
let mayNum=(Math.max(listUNum));//Math.max decuelve el número mayor de un conjunto de expresiones númericas dadas
console.log ("El número mayor es " + mayNum )//Escribiendolo de esta forma me retorna el primer número como el número mayor
aunque este no lo sea.  */ 

let A= prompt("Por favor ingresa un número entero");
let An= (parseInt(A));
let B= prompt("Por favor ingresa un número entero");
let Bn=(parseInt(B));
let C= prompt("Por favor ingresa un número entero");
let Cn=(parseInt(C));
let D= prompt("Por favor ingresa un número entero");
let Dn=(parseInt(D));
let E= prompt("Por favor ingresa un número entero");
let En=(parseInt(E));
let F= prompt("Por favor ingresa un número entero");
let Fn=(parseInt(F));
let G= prompt("Por favor ingresa un número entero");
let Gn=(parseInt(G));
let H= prompt("Por favor ingresa un número entero");
let Hn=(parseInt(H));
let I= prompt("Por favor ingresa un número entero");
let In=(parseInt(I));
let J= prompt("Por favor ingresa un número entero");
let Jn=(parseInt(J));


let NumMay=(Math.max(An, Bn, Cn, Dn, En, Fn, Gn, Hn, In, Jn ));
alert("El número mayor es: " + NumMay); //Planteandolo de esta forma es funcional
/*switch (NumMay) { //El resultado que me retorna es default
    case An>Bn:
        console.log("El número mayor es: " + An);
        break;
    case Bn>Cn:
        console.log("El número mayor es: " + Bn);
        break;
    case Cn>Dn:
        console.log("El número mayor es: " + Cn);
        break;
    case Dn>En:
        console.log("El número mayor es: " + Dn);
        break;
    case En>Fn:
        console.log("El número mayor es: " + En);
        break;
    case Fn>Gn:
        console.log("El número mayor es: "+ Fn);
        break;
    case Gn>Hn:
        console.log("El número mayor es: " + Gn);
        break;
    case Hn>In:
        console.log("El número mayor es: " + Hn);
        break;
    case In>Jn:
        console.log("El número mayor es: " + In)
        break;
    case Jn>In:
        console.log("El número mayor es: " + Jn);
        break;
    default:
        console.log("Por favor ingresa 10 números");
        break;

}*/