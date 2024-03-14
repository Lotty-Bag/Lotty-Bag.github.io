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
 */   
    var car1 = {
        name: "fiesta",
        manufacturer: "ford"
    }

    var car2 = {
        name: "panda",
        manufacturer: "fiat"
    }

    console.log (car1)
    console.log (car2)

/* Si nota che se dovessimo creare un oggetto per ogni auto la situazione diventerebbe molto lunga. In queste situazioni ci viene in aiuto l'OBJECT CONSTRUCTOR FUNCTION:
*/

    function Car(name, manufacturer) {
        this.name = name + "-"
        this.manufacturer = manufacturer  + "-"
        this.toString = function() {
            return this.name + ", " + this.manufacturer
        }  //questo metodo ci permette di chiedere in console la sola restituzione di una stringa attraverso car3.toString() e 
           // verrà visualizzata con 'modelY, Tesla'
    }

//tutto ciò che non è "incapsulato" da this. rimane una proprietà invisibile al mondo esterno (quindi il valore c'è ma non si vede)
// tipo se avessi dichiarato maxSpeed = 100 non sarebbe stato visibile in console mentre this.maxSpeed = ... diventa visibile e manipolabile

    var car3 = new Car("modelY", "Tesla");

    console.log (car3)

/* --- COME CREARE UN PROTOTYPE USANDO OCF (OBJECT CONSTRUCTOR FUNCTION) ?? --- */

/*
Il metodo visto nella scorsa lezione per creare un prototype sarebbe il metodo più "appropriato" per crearlo, però è anche il meno usato considerando il vantaggio dell'OCF 
Usando quindi l'esempio precedente andiamo ad aggiungere una proprietà al prototype:
*/

    Car.prototype.year = undefined; 
// se andiamo a visionare in console ora troviamo la proprietà year non definita espressa nel prototype e possiamo definirla quando ci pare (anche nel caso non fosse una proprietà di prototype)

    car3.year = 2018;
// in questo modo in console vediamo che è stata aggiunta la proprietà year: 2018 direttamente nell'oggetto mentre, se espandiamo prototype object la ritroviamo come year: undefined.

/*
questo lo possiamo fare tanto con le proprietà quanto con i metodi. e soprattutto i metodi li possiamo usare anche con oggetti "qualsiasi" ad esempio:
*/

    Object.prototype.sayThis = function(t){return t}
// in questo modo ho creato un metodo per gli oggetti in generale. quindi può essere usato tanto con car1 e car2 quanto con car3.
// basta scrivere in console car1.sayThis("ciao sono una fiesta") e ci restituirà appunto "ciao sono una fiesta" o qualunque cosa scriviamo all'interno dell'argomento tra parentesi

/* --- ANNOTAZIONI --- */

// Object.prototype.sayThis = "testo" -> impatta tutti gli oggetti!
// Car.sayThis = "testo" -> impatta tutti gli oggetti derivati da Car
// car3.sayThis = "testo" -> solo l'istanza car3 è impattata

