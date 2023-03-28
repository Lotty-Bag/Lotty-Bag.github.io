/* --- LE CLASSI : L'EREDITARIETÀ (INHERITANCE) --- */

// Le classi hanno presupposti di ereditarietà => possiamo creare due classi di cui una eridita delle proprietà o dei metodi dall'altra


/*
1)  prima creiamo la classe principale

        class Parent{
            constructor(){
                this.lastname = "Ford"
            }
        }

2)  Poi la classe che eredita

        class Child{

        }

3)  E richiamiamo il tutto in un oggetto (rob) che eredita le proprietà da Child.

        let rob = new Child()           //essendo child vuota, nel momento in cui richiamiamo la proprietà .lastname la console restituirà undefined
        console.log(rob.lastname)       // questo perchè non gli abbiamo detto che Child deve ereditare da Parents la proprietà .lastname

+++ Quindi, per ereditare le proprietà da un'altra classe, usiamo extends riprendendo tutto il costrutto precedente
*/

class Parent {
    constructor() {
        this.lastname = "Ford"
    }
}

class Child extends Parent {

}

let rob = new Child()
console.log(rob.lastname)

// Ora possiamo finalmente notare come effettivamente Child eredità .lastname da Parent
// Chiaramente la stessa cosa funziona anche con le funzioni (come nel caso precedente) quindi:

class Padre {
    constructor() {
        this.lastname = "Bagna"
    }
    displayLastname() {
        console.log("Your lastname is " + this.lastname)
    }
}

class Figlio extends Padre {

}

let lotty = new Figlio()
lotty.displayLastname()



/* --- ESEMPIO PIÙ COMPLESSO --- */


// proviamo a considerare la creazione di due oggetti che hanno 2 proprietà in comune ed una diversa. 
// A questo punto conviene creare una classe PADRE e due classi FIGLI che andremo ad estendere

class Member {                          // PADRE
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    display(){                                     
        console.log("Id is " + this.id)
        console.log("Name is " + this.name)
    }
}

class studente extends Member {                // FIGLIO
    constructor(id, name, marks) {   
/* nel costruttore dobbiamo necessariamente passargli tutti gli argomenti (id, name e marks) ma id e name sono definiti in member quindi 
   per ereditare questi argomenti usiamo SUPER  */ 
        super(id, name)
        this.marks = marks                      
    }

    displayMarks(){                                      
        console.log("Marks are " + this.id)
    }
}


class insegnante extends Member {               // FIGLIO
    constructor(id, name, exp) {
        super(id, name)
        this.exp = exp
    }

    displayExp(){                                    
        console.log("Years of experience are " + this.exp)
    }
}

var studenteA = new studente(1, "Juan", 5)
studenteA.display()
studenteA.displayMarks()

var insegnanteA = new insegnante(1, "Jane", 5)
insegnanteA.display()
insegnanteA.displayExp()