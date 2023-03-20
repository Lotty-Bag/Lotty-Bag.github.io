/* OBJECT CONSTRUCTOR FUNCTION */

/*
La sintassi vista in precedenza per creare un oggetto è anche nota come OBJECT LITERAL 

    var animal = {
        nasce: function () {},
        respira: function () {},
        mangia: function () {},
    } 

    => la sintassi tra parentesi graffe.

Ma vi è un metodo migliore per la creazione di un object che è l'OBJECT CONSTRUCTOR FUNCTION. Questo perchè perchè consente di:
    -   creare multiple istanze di un oggetto (con semplicità)
    -   customizzare la creazione di un oggetto (passando argomenti alla constructor function)

Esempio di "vecchio" object:
    
    var car1 = {
        name: "fiesta",
        manufacturer: "ford"
    }

    var car1 = {
        name: "fiesta",
        manufacturer: "ford"
    }


*/