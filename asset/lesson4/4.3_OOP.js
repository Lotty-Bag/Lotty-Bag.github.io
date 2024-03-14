/* OBJECT ORIENTED PROGRAMMING */

/*
Object oriented programming ossia programmazione orientata agli oggetti e solo uno dei modi che
abbiamo per frammentare il programma in porzioni di codice facilmente mantenibili e riusabili.

        Questo pattern, utilizzato da JS, è comune anche ad altri linguaggi.

        Gli oggetti si possono vedere come un’unità di codice coerente secondo un argomento o un contesto
        particolare.

        Abbiamo già visto come Date e Array ecc.. Essi contengono tutti i metodi (le funzioni) e i proprietà (variabili o costanti) che sono state individuate come necessarie per gestire una tematica: date, array..

        Secondo un concetto di “responsabilità singola”.. Tutte le funzioni e i valori relativi ad una tale tematica dovrebbero stare all’interno dello stesso oggetto. (abbiamo programmato bene quando un componente fa una cosa sola e l'abbiamo "chiamato" con il nome giusto.. il naming è una delle parti più difficili => far fare al nostro oggetto una cosa sola ci aiuta a trovare il nome giusto)

Alcuni concetti chiave del OOP sono:

        - INCAPSULAMENTO : le funzionalità interne di un oggetto possono essere nascoste al mondo esterno, e un oggetto può utilizzarle soltanto quanto è stato reso pubblico (quindi si evince che cosa fanno ma non come sono fatte).

        - EREDITARIETA’: la possibilità di creare un nuovo oggetto, a partire da un altro esistente (in JS l’ereditarietà è “nativamente” per prototipo).
 */   

/*
class Pet {
    #privateField;      // i campi privati (non visibili all'esterno) si segnalano col cancelletto

    constructor (animal, name) {       // costruttore (metodo eseguito durante la creazione dell'istanza tramite new)
        this.animal = animal;
        this.name = name;
        this.#privateField = "il";
    }

    get animal(){   //getter
        return this._animal;    //richiede che venga applicato _ per evitare chiamate ricorsive
    }

    set animal(newAnimal){  //setter
        this._animal = newAnimal;     //richiede che venga applicato _ per evitare chiamate ricorsive
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name (n){
        this._name = n;
    }

    toString(){
        return this.#privateField + " " + this.animal + " " + this.name;    //riscrive il metodo toString
    }
}

var pet = new Pet("gatto", "Matisse");

console.log(pet.name);
console.log(pet.animal);
console.log(pet.toString());
console.log(Pet)
*/


// rifacendoci alla costruzione di una classe, come nell'esempio precedente, possiamo estendere la classe Pet appena creata con altre classi 

class Cat extends Pet {        //La classe Cat estende la classe Pet

    constructor(name){
        super("gatto", name)   // super è la keyword che ci permette di accedere alle features di Pet
    }
}

var pet = new Cat("Bizet")

console.log(pet.name);
console.log(pet.animal);
console.log(pet.toString());
console.log(Pet.#privateField) // ci restituirà errore dicendoci che non può leggere questo campo in quanto privato

/*

In Javascript, non essendoci il concetto di “private o protected accessor” l’incapsulamento è reso in modo diverso rispetto agli altri linguaggi OOP.

        E’ nascosto al mondo esterno solo quello che è dichiarato e usato nel costruttore senza l’utilizzo della keyword this.

*/