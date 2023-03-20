/* LE CLASSI */

/*
Le classi in js hanno una valenza minore rispetto ad altri linguaggi di programmazione e questo perchè gli Object e i prototype già permettono di interagire in toto con essi. tant'è che in alcuni browser le classi potrebbero non essere supportate. 
Le classi fondamentalmente le hanno create in js per permettere di essere un linguaggio più vicino agli sviluppatori Java. La sostanza è che avendo una così varia manipolazione degli oggetti non abbiamo bisogno di utilizzare le classi. Va tutto a discrezione ed abitudine dello sviluppatore.

Esempio di creazione di una classe:
 */   


class Pet {
    #privateField;      // campi privati (non visibili all'esterno)

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
