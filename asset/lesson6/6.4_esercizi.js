/*   ----   ESERCIZIO 1   ----   */

// Scrivere un convertitore di unità di misura (g/kg) utilizzando alcuni dei concetti visti nelle basi di JS.

// 1)
function convertitore(x) {
    var y = x / 1000;

    console.log(x + " grammi equivalgono a " + y + " Kg!")
    return y
}

convertitore(2500);

// 2)

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

/*   ----   ESERCIZIO 2   ----   */

/*
Scrivi una funzione che calcoli il BMI (body mass index)
input: weight & height
output: BMI (= weight/height^2)
*/

// 1)
function myBMI(weight, height){
    var formula = weight / (height**2)
    console.log('il mio BMI è ' + Math.round(formula) + ', considerando che il mio peso è ' + weight + 'kg e la mia altezza è ' + height + 'm.')
    return formula
}

myBMI(60, 1.61)

// 2) Scrivila in arrow function

let calculateBMI = (weight, height) => weight / (height**2);

console.log('il mio BMI è ' + Math.round(calculateBMI(60,1.61)))


/*   ----   ESERCIZIO 3   ----   */

/*
Crea due funzioni

Funzione 1: scrivere una funzione che calcoli le tasse, questa funzione dovrebbe accettare la percentuale di tasse e lo stipendio e calcolare l'imposta sullo stipendio dato secondo la percentuale.

Funzione 2: Scrivi una funzione per calcolare lo stipendio, accetta tre parametri.
Parametro 1: ore lavorate.
Parametro 2: tariffa oraria.
Parametro 3: una funzione di callback che calcola le tasse sullo stipendio.



Innanzitutto calcola lo stipendio guadagnato moltiplicando le ore lavorate con la tariffa oraria.
Quindi passare questo stipendio alla funzione di callback insieme alla percentuale di imposta per calcolare l'imposta da pagare sullo stipendio guadagnato.
Calcola anche lo stipendio in mano dopo aver pagato le tasse.



Il programma dovrebbe visualizzare il seguente output:
Stipendio guadagnato.
Imposta calcolata sullo stipendio guadagnato.
Stipendio in mano dopo aver pagato le tasse.
*/

let calcTax = (rate, salary) => rate * salary / 100

//se l'avessimo scritta così : {rate * salary / 100} non avrebbe funzionato perchè salary sarebbe rimasta all'interno del local scope di
// calcTax in quanto dentro parentesi graffe e in console ci ci avrebbe restituito undefined a taxPaid perchè non riusciva a leggere salary 
// nella funzione precedente

let calcSalary = (hourWork, hourlyRate, taxFunction) => {
    let salary = hourWork * hourlyRate
    let taxPaid = taxFunction(30, salary)
    var salaryAfterTax = salary - taxPaid
    
    console.log('Stipendio calcolato su tariffa oraria: ' + salary)
    console.log('Tasse da pagare sullo stipendio: ' + taxPaid)
    console.log('Salario netto: ' + salaryAfterTax)
}

calcSalary(40, 100, calcTax)


/*   ----   ESERCIZIO 4   ----   */

/*
Progetta un sistema bancario per emulare il prelievo e il deposito di denaro sul conto di una persona.

Crea variabili per contenere il saldo del conto e il numero di conto.
Crea una funzione di deposito che accetta l'importo da depositare e lo aggiunge al saldo del conto.
Al momento del deposito, visualizza anche un messaggio sull'importo depositato e il saldo aggiornato.

Crea un'altra funzione chiamata prelievo, che accetta un importo da prelevare e detrae tale importo dal saldo principale.
Dopo aver detratto l'importo, visualizza anche un messaggio sull'importo detratto e il saldo aggiornato.
Questa funzione controlla anche se sono disponibili fondi sufficienti prima di effettuare una transazione.
Se l'importo del prelievo supera l'importo del saldo, la funzione dovrebbe visualizzare un messaggio di errore.
*/

const accountNumber = 123456789
var accountbalance = 0

function deposit (amountDeposited) {
    accountbalance += amountDeposited
    console.log(`Stai depositando ${amountDeposited}€ sul conto n. ${accountNumber}. Il tuo saldo aggiornato è ${accountbalance}€.`)
    
}

deposit(3500)
//console.log(accountbalance) FUNZIONA! 


function withdraw(amountDeduct){
    if(accountbalance >= amountDeduct ){
        accountbalance -= amountDeduct
        console.log('Stai prelevando ' + amountDeduct + '€ dal conto n. ' + accountNumber + '. Il tuo saldo aggiornato è ' + accountbalance + '€.')
    } else {
        console.log('Stai tentando di prelevare ' + amountDeduct + '€ dal conto n. ' + accountNumber + '. Ma non è possibile perchè il tuo daldo è di ' + accountbalance + '€.')
    }
    
}

withdraw(200)