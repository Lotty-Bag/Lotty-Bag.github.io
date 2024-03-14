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



//////////////     FUNCTION AS VALUE    //////////////


function dimmiCiao() {
    console.log("Ciao")
}

console.log(dimmiCiao)
// se alla console passiamo dimmiCiao senza le parentesi (), ci restituirà l'intera funzione

var hello = dimmiCiao
hello()
// passiamo dimmiCiao a una variabile hello. quest'ultima anche se la inizializziamo come una funzione in realtà non lo è ma semplicemente passa il VALORE della funzione dimmiCiao

//lo stesso proncipio lo possiamo applicare alle proprietà degli oggetti:

function sum(a, b){
    console.log(a + b)
}
// quindi abbiamo creato la funzione sum
let math ={
    add: sum,
}
//ora abbiamo passato il suo valore all'oggetto math (sempre senza parentesi)
math.add(10,20)
// e ora andiamo ad utilizzarla




//////////////     FUNCTION PARAMETERS    //////////////

/*      (1)      */
function add(a, b){
    console.log(a + b)
}

add() //chiaramente questo ci restituirà NaN perchè non abbiamo asseggnato nessun valore
add(10) //qui ne abbiamo assegnato uno solo e ci darà NaN cmq perchè non sa riconoscere il valore del secondo parametro

/*      (2)      */
function add1(a=0, b=0){ //in questo modo abbiamo assegnato dei valori di default ad a e b per fare in modo che richiamando add1 vuoto ci restitusca 0 invece di NaN che è un errore!
    console.log(a + b)
}

add1()

/*      (3)      */
function add2(a=0, b=0){
    console.log(a + b)
}

add2(10)
//definendo dei valori default e passando un solo paramentro ad add2 verrà fuori che l'altro parametro sarà 0 di default  => 10 + 0 = 10