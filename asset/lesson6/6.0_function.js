///////////////////     FUNCTION    ////////////////////

// Le funzione sono un blocco di codice che viene definito una volta sola e può essere usato quante volte si vuole
//questo è un esempio di funzione:

function welcomeUser1() {
    var name = "John"

    console.log(`Hello ${name}, welcome to our website`) //si usa il backtick (option+\) per richiamare delle variabili all'interno di una stringa 
    console.log("Hello ${name}, welcome to our website") //senza il backtick il risultato è una stringa in tutto e per tutto
}

//in questo modo la funzione è stata DEFINITA. Ovvero è stato definito che cosa deve fare questa funzione.
// le funzioni definite hanno la necessità di essere ESEGUITE per poter funzionare.
// il modo per CHIAMARE/ESEGUIRE una funzione è richiamarne il nome:

welcomeUser1()
welcomeUser1() //in questo modo ho richiamato la stessa funzione due volte

// all'interno delle parentesi tonde viene descritto l'ARGOMENTO (o PARAMENTRO). Quindi si potrebbe riscrivere la funzione in questo modo:

function welcomeUser(name, number) {

    console.log(`Hello ${name}, welcome to our website`)
    console.log(`You are visitor number ${number}`)
}

welcomeUser("Mark", 1)
welcomeUser("Jack", 2)