//////////////     FUNZIONE AREA CERCHIO    //////////////

function areaCerchio(radius) {
    var area = Math.PI * (radius ** 2)
    console.log(area)
}
areaCerchio(10)
areaCerchio(8)



//////////////     RETURN PART 1    //////////////

// Se scriviamo qualcosa all'interno di una funzione, questo qualcosa rimane rimane calcolato solo ed esclusivamente all'interno della funzione stessa e non è possibile richiamarlo od utilizzarlo al di fuori.

function totalMarks(phy, chem, math) {
    var total = phy + chem + math
    return total
}


var result = totalMarks(65, 78, 99)
console.log(result)


//se non avessimo inserito il RETURN DI TOTAL il risultato di RESULT sarebbe stato UNDEFINED, proprio perchè la variabile total è definita all'interno della funzione quindi fuori non ha valore -> di conseguenza non avrebbe valore nemmeno la funzione totalMarks e nemmeno la variabile result creata fuori dalla funzione

// Quindi il RETURN ci permette di utilizzare il VALORE della variabile total al di fuori della funzione!! var total nasce e muore dentro la funzione totalMarks. per richiamarla fuori dalla funzione la devo per forza ridefinire.

//posso riscrivere così il risultato:

console.log(totalMarks(65, 78, 99))

//il RETURN quindi TERMINA il lavoro di una funzione e restituisce un valore



//////////////     RETURN PART 2    //////////////

// in questo esempio scriviamo una nuova funzione che sfrutti quella precedente (totalMarks) per restituire la percentuale dei precedenti valori

function percentage(t) { //il RETURN ci permette di riutilizzare il VALORE di total nella nuova funzione
    var per = t / 300 * 100 + "%"
    console.log(per)

}

percentage(result)
percentage(totalMarks(65, 78, 99))


//////////////     FUNCTION EXPRESSION    //////////////

let heyThere = function() { // Esempio di FUNCTION EXPRESSION
    console.log('hey there')
}

heyThere() // Così è come si richiama

// La differenza tra FUNCTION DECLARED e FUNTION EXPRESSION risiede nel QUANDO!! Ovvero la function declared può essere chiamata anche prima di essere definita.
// Mentre la function Expression può essere usata e chiamata solo dal momento in cui viene definita.

var sum = function(a, b) {
    return a + b
}

let risultato = sum(10, 20)
console.log(risultato)


//////////////     ARROW FUNCTION    //////////////

// Esistono 3 modi per scrivere una funzione in js: 1) FUNCTION DECLARED 2) FUNCTION EXPRESSION  e  3) ARROW FUNCTION

//Le arrow function servono fondamentalmente per scrivere funzioni semplici e chiare (che non abbiano quindi molto codice al loro interno). E la cosa utile è che il RETURN non è necessario esplicitarlo poichè è "compreso" nella sintassi della funzione stessa

let hello = () => {
    console.log("Hello there!")
}
hello() // La chiamata avviene allo stesso modo di tutte le altre funzioni

const hi = () => { // Si raccomanda di usare CONST al posto di let o var
    return "Hi there" // Qui esplicitiamo il return ma nel prossimo caso vediamo non essere necessario
}
console.log(hi())



const ciao = () => "Ciao" // Addirittura possiamo togliere le graffe  come si vede nei prossimi esempi
console.log(ciao())



const add = (a, b) => a + b
console.log(add(3, 5))


const Pi = (a) => 3.14
console.log(Pi())

const Pi2 = a => 3.14 // Solo ed esclusivamente quando abbiamo UN SOLO PARAMETRO possiamo omettere anche le tonde
console.log(Pi2())