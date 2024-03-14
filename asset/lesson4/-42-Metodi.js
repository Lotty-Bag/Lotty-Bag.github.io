/* --- LE CLASSI : I METODI --- */

// Alle classi possiamo assegnare metodi che si riflettano, allo stesso modo delle proprietà, a tutti gli oggetti che ereditano dalla classe di partenza
// Rifacendoci all'esempio di class Student di -41-Cassi.js aggiungiamo a Student due metodi:


class StudentMethod {
    constructor(id, name, marks){
        this.id = id 
        this.name = name 
        this.marks = marks 
    }

    display(){                                      // Metodo 1
        console.log("Id is " + this.id)
        console.log("Name is " + this.name)
        console.log("Mark is " + this.marks)
    }

    hello(){                                        // Metodo 2
        console.log("Hello " + this.name)
    }
}

// in questo modo abbiamo creato due metodi che possono essere richiamati direttamente dai nuovi oggetti in questo modo:

var studentA = new StudentMethod(1, "John", 98)
var studentB = new StudentMethod(2,"Al", 75)
var studentC = new StudentMethod(3,"Jack", 62)

studentA.hello()
studentB.display()
studentC.hello()


