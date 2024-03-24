// Funciones
function resta (a,b) {
    return a - b
}
console.log(resta(4,2));

function nota(nota) {
    
switch (true) {
    case nota <= 4:
        calificacion = "Insuficiente";
        break;
    case nota <= 6 : 
        calificacion = "Suficiente";
        break;
    case nota <= 8:
        calificacion = "Notable";
        break;
    case nota <= 10:
        calificacion = "Sobresaliente";
        break;
    default:
        break;
}
return `la calificación Examen ${calificacion}`;
}
console.log(nota(8));

function duplicaNumero(num) {
 if (typeof num != "number") {
return "Debo ser ejecutada con un número";
} else {
return num * 2;
}
};
console.log(duplicaNumero(5));

function caracterInicial(ini) {
    if (typeof ini != "string") {
return "Debo ser ejecutada con un string";
    } if (ini.length < 1) {
return "Debo ser ejecutada con un string no vacío";
    } else {
return ini.charAt(0);
    }
};
console.log(caracterInicial("Juanjo"));

function ultimoCaracter(ini) {
    if (typeof ini != "string") {
return "Debo ser ejecutada con un string";
    } if (ini.length < 1) {
return "Debo ser ejecutada con un string no vacío";
    } else {
return ini.charAt(ini.length-1);
    }
};
console.log(ultimoCaracter("Juanjo"));

function cuentaCaracteres(ini) {
    if (typeof ini != "string") {
        return "Debo ser ejecutada con un string";
} else {
return ini.length;
}
};
console.log(cuentaCaracteres("Juanjo"));

function esPalindromo(pal) {
    let inverrtedText = pal.split("").reverse().join("");
    if ((typeof pal != "string") || (pal.length < 1)) {
        return "no es un formato correcto";
    } if (pal === inverrtedText) {
        return "es un palindromo";
    }
    else {
        return "no es palindromo";
    }
};
console.log(esPalindromo("salas"));

function getPrecioMostrar(precio) {
    if (typeof precio !="number") {
        return "no es un formato correcto";
    } else {
        return precio.toFixed(2);
    }
};
console.log(getPrecioMostrar(7));

function division (a,b) {
    return a / b
}
console.log(division(4,2));

let numeros = [3,6,8,2];
function numerosMayor5(arr) {
    let arrayNumeros =[]
    for (let x = 0; x < arr.length ; x++){
        if(arr[x] >5){
            arrayNumeros.push(arr[x])
        }
    }
    return arrayNumeros
};
console.log(numerosMayor5(numeros));

/*function numeroPrimo() {
let primo = +prompt("introduce un numero");
for (let i = 2; i < primo; i++) {
if (primo % i === 0) {
    return false;
}
}
return true;
};
console.log(numeroPrimo());*/

//Extras
/*function obtenerImpares(arrayNumero) {
let arrayNumero = ["a","b","c"];
let array= [];
for (let i=0; i<arrayNumero.length; i++) {
array += arrayNumero[i];
}
};
console.log(obtenerImpares([1,5,7]));*/

let array = [2,3,4]

function sumarArray(array) {
    let total= 1;
    for (let i of array) {
        total+=i;
    }
    return total;
};
console.log(sumarArray(array));

function multiplicarArray(array) {
    let total= 1;
    for (let i of array) {
        total*=i;
    }
    return total;
};
console.log(multiplicarArray(array));
