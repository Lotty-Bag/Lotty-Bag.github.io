/* --- LE CLASSI --- */

// Nascono dalla necessità di creare un oggetto che abbia valori e proprietà generiche che possiamo applicare a più variabili/oggetti.
// Ci troviamo in questa situazione:

var student = {
    id: 1,
    name: "John",
    marks: 89,
    displayStudent: function(){
        console.log("Id is" + this.id) //il this. ci permette di richiamare all'interno dell'oggetto le stesse proprietà già definite
        console.log("Name is" + this.name)
        console.log("Mark is" + this.marks)
    },
    // la proprietà displayStudent la possiamo anche riscrivere in questo modo (quindi le funzioni entrano a far parte direttamente nelle proprietà dell'oggetto):

    display(){
        console.log("Id is " + this.id)
        console.log("Name is " + this.name)
        console.log("Mark is " + this.marks)
    }
}

student.display()
// student.displayStudent() restituisce lo stesso identico risultato

// il problema di questo codice è che vale per un solo studente. Noi invece vogliamo creare uno script che ci permetta di mantenere sempre le stesse proprietà ma assegnare valori diversi. Per questo possiamo creare una classe:

class Student {
    constructor(){      // il costruttore è quello che ci permette di riutilizzare la classe quante volte vogliamo
        this.id = 1
        this.name = "John"
        this.marks = 98
    }
}

var student1 = new Student() // qui stiamo creando l'oggetto student1 partendo proprio dalla classe Student -> l'oggetto student1 erediterà tutte le proprietà di class Student
console.log(student1) //qui vediamo come stampando in console student1 effettivamente ci restituisce Student

// ma ancora non siamo nella situazione più ottimale perchè Student non lo possiamo usare per più studenti ma solo per John.. quindi dobbiamo modificarlo affinchè valga per infiniti studenti

class StudentAll {
    constructor(id, name, marks){       //prima definiamo quindi gli argomenti (che sono gli stessi che vogliamo estrapolare)
                                        // poi andiamo a sostituire i vari dati dello studente con gli stessi argomenti
        this.id = id //1
        this.name = name //John
        this.marks = marks //98
    }
}

// in questo modo possiamo creare infiniti studenti solo con l'assegnazione dei 3 argomenti. Ovvero:

var studentA = new StudentAll(1, "John", 98)
var studentB = new StudentAll(2,"Al", 75)
var studentC = new StudentAll(3,"Jack", 62)

console.log(studentA)
console.log(studentB)
console.log(studentC)



