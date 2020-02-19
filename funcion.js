//Declaración de variables.
let arrayPar = [];
let arrayImpar = [];
let x = 0;

// Creamos la función;
function lista() {
    while (x < 50) {
        let numero = Math.floor((Math.random() * 100) + 1);
        if (numero % 2 == 0) {
            arrayPar.push(numero)
        } else {
            arrayImpar.push(numero)
        }

        x++
    }

}

// Invocamos la función.
lista()

//Mostramos por consola la lista de numero pares e impares.
console.log(arrayPar, arrayImpar)

