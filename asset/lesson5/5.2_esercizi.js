/* -----    ESERCIZI   ----- */

/*
Scrivi un programma che dati:
    - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
    - Il tipo di operazione aritmetica da effettuare, una delle seguenti :
      addizione - sottrazione - moltiplicazione - divisione
Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

esempio:
Input : a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4] 
        b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5]
Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
*/

/* CICLO FOR - ADDIZIONE */

var a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4] 
var b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5]

var c = []

for (let i = 0; i < a.length; i++) {
    var somma = a[i] + b[i];
    c.push(somma)
}

console.log(c)

/* CICLO FOR - PRODOTTO */

var d = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4] 
var e = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5]

var f = []

for (let i = 0; i < d.length; i++) {
    var prodotto = d[i] * e[i];
    f.push(prodotto)
}

console.log(f)

/* CICLO FOR - DIVISIONE */

var g = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4] 
var h = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5]

var l = []

for (let i = 0; i < d.length; i++) {
    var prodotto = g[i] / h[i];
    l.push(prodotto)
}

console.log(l)

/* CICLO FOR - SOTTRAZIONE */

var m = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4] 
var n = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5]

var o = []

for (let i = 0; i < d.length; i++) {
    var prodotto = m[i] - n[i];
    o.push(prodotto)
}

console.log(o)


/* ---------------  RIEMPIRE GLI ARRAY  --------------- */



/* Riempiamo un array vuoto con numeri random con CICLO FOR */

var arRandom1 = new Array ()

for (let i = 0; i < 10; i++) {
    arRandom1.push(Math.floor(Math.random()*10) + 1); // il + 1 ci permette di usare anche il numero 10. 
                                                      // se non ci fosse i num sarebbero compresi tra 0 e 9
}
console.log(arRandom1)



/* Riempiamo un array vuoto con numeri random con .MAP() => usiamo anche la ARROW FUNCTION */

var arRandom2 = new Array (20).fill().map(() => Math.floor(Math.random()*10) + 1);
// .fill() -> permette di riempire un array vuoto con valori nulli mentre .map() lavora su ogni elemento dell'array e ne ritorna uno nuovo 
console.log(arRandom2)



/* Riempiamo un array vuoto con numeri random con .FOREACH() => usiamo anche la ARROW FUNCTION */

var arRandom3 = [] 
// il .forEach() non ritorna niente quindi abbiamo la necessità di creare un array nuovo e vuoto.
Array(20).fill().forEach(
    () => {
        arRandom3.push(Math.floor(Math.random()*10) + 1)  
    });

console.log(arRandom3)



/* Esempio di come funziona .FOREACH() */

var numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
});


/* ---------------  ESEMPIO TUTTO UNITO  --------------- */



var array1 = new Array (10).fill().map(() => Math.floor(Math.random()*10) + 1);
var array2 = new Array (10).fill().map(() => Math.floor(Math.random()*10) + 1);

function operazioniTraArray(array1, array2, operazione) {

    if (array1.length !== array2.length) {

        throw Error("Gli array devono avere la stessa lunghezza")
    }

    for (let i = 0; i < array1.length; i++) {
        if (typeof array1[i] !== "number" || typeof array2[i] !== "number") {
            throw Error("Gli array devono contenere solo numeri")
        }
        
    }

    var array3 = []

    for (let i = 0; i < array1.length; i++) {

        switch (operazione) {
            case "somma":
                array3[i] = array1[i] + array2[i]
                break;
    
            case "sottrazione":
                array3[i] = array1[i] - array2[i]
                break;
    
            case "divisione":
                array3[i] = array1[i] / array2[i]
                break;
    
            case "prodotto":
                array3[i] = array1[i] * array2[i]
                break;
    
            default:
                throw Error("Operazione non consentita")
        }
    
    }

    return console.log(array1 + "\n" + array2 + "\n" + array3);
    
}

operazioniTraArray(array1, array2, "prodotto")


var array4 = new Array (20).fill().map(() => Math.floor(Math.random()*10) + 1);
var array5 = new Array (20).fill().map(() => Math.floor(Math.random()*10) + 1);
var array6 = new Array().map(operation)

function operation() {
    for (let i = 0; i < array4.length; i++) {
        array6[i] = array4[i] + array5[i]
    }

    return console.log(array4 + "\n" + array5 + "\n" + array6)
    
}

operation()