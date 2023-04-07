//////////////     NESTED FUNCTION    //////////////

// Le nested function sono funzioni che al loro interno contengono ulteriori funzioni. Ad esempio questa funzione:

function calcAvg(a, b, c) {
    var total = a + b + c
    var avg = total / 3
    return avg
}

console.log(calcAvg(10, 20, 30))


// potrebbe essere riscritta come una nested function, ovvero:

function AvgNest(a, b, c) {
    function total(a, b, c) {
        return a + b + c
    }
    return total(a, b, c) / 3
}

console.log(AvgNest(10, 20, 30));

// La macchina in questo caso legge in maniera differente da quello che ci aspettiamo l'intera funzione. Ovvero: prima legge AvgNest ed il suo return e capisce che per poter leggere i parametri esplicitati ha bisogno di eseguire total.



//////////////     DIFFERENCE BETWEEN METHODS & FUNCTION     //////////////

// Le funzioni vengono chiamate metodi nel momento in cui andiamo con esse a definire la proprietà di un oggetto.

var student = {
    name: "Mark",
    marks: 90,
    sayHi: function () {
        console.log("Hi")
    }
}

student.sayHi()


//////////////     THIS    //////////////

var studente = {
    name: "Pino",
    marks: 90,
    sayHi: function () {
        console.log("Ciao " + this.name) //studente.name
    }
}

studente.sayHi()

// come si nota nell'esempio sopra, abbiamo voluto richiamare una proprietà (name) di STUDENTE all'interno della nostra funzione. Avremmo potuto farlo con studente.name ma la cosa sarebbe stata rischiosa perchè, se mai avessimo voluto cambiare il nome della variabile (tipo da studente a students), la funzione ci restituirebbe errore in quanto studente non sarebbe più definito.
// Ecco perchè si usa THIS! con this.property qualunque nome si darà al nostro oggetto la funzione sarà sempre valida perchè fa riferimento all'oggetto stesso nel quale è contenuto e non al suo nome.



//////////////     HOISTING    //////////////


/* .1. */

displayName()

function displayName() {
    console.log("John")
}

// In questo caso abbiamo dichiarato la funzione prima ancora di scriverla. E FUNZIONA!! Questo perchè in JS vi è la possibilità di istanziare le funzioni ancora prima di dichiararle.

// Cosa che però NON FUNZIONA con le VARIABILI e di conseguenza tanto meno con le FUNCTION EXPRESSION perchè introdotte da una variabile.



function convertitore(x) {
    var y = x / 1000;

    console.log(x + " grammi equivalgono a " + y + " Kg!")
    return y
}

convertitore(2500);



function convert(tipo, quantita) {
    // se tipo == 1 allora quantita è in grammi
    // altrimenti quantità è in kili
    // ritorna la conversione di conseguenza

    if(tipo == 1){

        var grToKg = quantita / 1000
        console.log(quantita + " grammi equivalgono a " + grToKg + " Kg!")
        return grToKg

    } else {

        var KgTogr = quantita * 1000
        console.log(quantita + " Kg equivalgono a " + KgTogr + " gr!")
        return KgTogr 
    }
}



convert(2, 1250);