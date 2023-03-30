/* ----- ESERCIZIO 1*/

/*
    ● Scrivere una “object constructor function” o una “classe” che permetta digestire una carta da gioco: Card.
    ● Questa dovrà possedere le properties:
        a. face (a cui potrà essere assegnato un valore compreso tra : Asso, 2, 3, 4, …, Re.
        b. suit (a cui potrà essere assegnato un valore compreso tra (1 cuori, 2 fiori, 3 picche, 4 quadri)
    ● Creare poi un altro oggetto CardDeck che abbia un metodo “shuffle” capace di instanziare una carta “con valori random”.
PS. Suggerimento: utilizzare il metodo Math.round(Math.random() * max)
*/


//creo un OCF per la card



function Card(face, suit) {
    function getFace(face) {
        if (face < 0 || face > 12 || Number.isInteger(face) === false)
            throw new Error("Argument out of range");

        switch (face) {
            case 0:
                return "Asso";
            case 10:
                return "Fante";
            case 11:
                return "Donna";
            case 12:
                return "Re";
            default:
                return (face++).toString();
        }
    }

    function getSuit(suit) {
        if (suit < 0 || suit > 3)
            throw new Error("Argument out of range");

        switch (suit) {
            case 0:
                return "Cuori";
            case 1:
                return "Quadri";
            case 2:
                return "Fiori";
            case 3:
                return "Picche";
            default:
                throw new Error("Argument out of range");
        }
    }

    this.face = getFace(face);
    this.suit = getSuit(suit);

}

function CardDeck() {

    this.shuffle = function () {

        var face = Math.round(Math.random() * 12);
        var suit = Math.round(Math.random() * 3);

        return new Card(face, suit);

    }
}

var CardDeck = new CardDeck();

console.log(CardDeck);
console.log(CardDeck.shuffle());



/*
    ● Estendere l’oggetto built-in di javascript (Date) aggiungendo un metodo getYesterday(); che ritorni IL NOME della data di ieri (Lunedì, Martedì… ecc..).
        Suggerimento:
        i. date.setDate(date.getDate() - 1) // dove date = new Date() ritorna assegna a date la data di ieri..
        ii. date.getDay() ritorna il numero (ordinale, 0 based, del giorno).
*/


// class Cat extends Pet {        //La classe Cat estende la classe Pet

//     constructor(name){
//         super("gatto", name)   // super è la keyword che ci permette di accedere alle features di Pet
//     }
// }

console.log(Date())

class yesterdayName extends Date() {
    constructor(todayName) {
        super("oggi", todayName);
        if (todayName < 0 || todayName > 6)
        throw new Error("Argument out of range");
        switch (todayName) {
            case 1:
                return "Lunedì";
            case 2:
                return "Martedì";
            case 3:
                return "Mercoledì";
            case 4:
                return "Giovedì";
            case 5:
                return "Venerdì";
            case 6:
                return "Sabato";
            case 7:
                return "Domenica";
        }

    }
}


Date().todayName