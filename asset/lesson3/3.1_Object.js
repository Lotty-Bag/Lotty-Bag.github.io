/* OBJECT PART 1 */

/*
La necessità di usare gli Object nasce dal fatto che le variabili possono contenete UN SINGOLO VALORE.
Gli oggetti invece ci permettono di IMMAGAZZINARE PIÙ VALORI INSIEME (=> ci permettono di evitare di creare 1000 variabili diverse)
Object è quindi un “valore” composto: una collezione NON ordinata di proprietà.

Può essere creato in diversi modi:

    - La funzione: Object.create(prototype) (ad es. var myObj = Object.create({}|Object.prototype|null))
            * Attenzione!! Passare null come prototype non consente di ereditare metodi base come toString() e altre feature da Object.
    - Attraverso la sintassi: {} (ad es. var myObj = { x:10, y:”myString” })
    - Attraverso la keyword new: (ad es. var myObj = new Object())
*/

//Possiamo creare un oggetto così:

    var animal = {
        nasce: function () {/*...*/},
        respira: function () {/*...*/},
        mangia: function () {/*...*/},
    }       // quindi definiamo il nostro "archivio" con delle proprietà definite all'interno parentesi graffe 

// Ma se avessimo la necessità di creare un altro oggetto che erediti queste proprietà lo possiamo fare con Object.create(prototype)

    var felino = Object.create(animal)

    console.log(felino) 

// a questo punto vediamo che felino ha ereditato le propèrietà di animal e possiamo ulteriormente implementare proprietà:

    felino.type = "mammifero";
    felino.corre = function(){/*...*/}
    felino.verso = "roar"

// ora oltre ad aver assorbito le proprietà di animal si sono aggiunte type e corre che sono proprie solo di felino.

//possiamo anche, una volta definiti dei protipi, creare un nuovo oggetto settao sui protipi già creati

    Object.setPrototypeOf(felino, animal);
    console.log(felino)

    var leone = Object.create(animal)
    Object.setPrototypeOf(leone, felino);
    leone.verso = "roar"

    console.log(leone)



/* --- USI POSSIBILI DI OBJECT.CREATE & PROTOTYPE --- */

/*
Un possibile uso di Object.create e prototype può essere fatto quando ci si vuole proteggere dalla possibilità che
altri possano modificare il valore delle properties di un oggetto (specie quando si passa tramite librerie terze
parti).
In questi casi usare:

var o = {x: “should notchange”};
lib.function(Object.create(o));

In questo modo ogni modifica alla propery x, non impatta (o).
*/


/* --- OTTENERE I VALORI DALLE PROPERTIES --- */

/*
Si accede ai valori delle prop. di un Object attraverso la “dot notation”:

    var book = { author: “pippo” }; var a = book.author;

E’ anche possibile accedere al valore attraverso il property index:

    var a = book[“author”]; che ricorda un array associativo..
*/

/* --- SETTARE I VALORI NELLE PROPERTIES --- */

/*
Analogamente è possibile settare i valori delle properties:

    book.author = “pippo1”;
    book[“author”] = “pippo1”;

Il nome di una property deve essere necessariamente una stringa o un Symbol (può essere anche una stringa vuota!)

E’ possibile assegnare valori a proprietà che ancora non esistono nell’oggetto.
E’ possibile accedere a proprietà che non esistono nell’oggetto quindi semplicemente il valore di
ritorno sarà undefined;
Le properties possono essere readonly (quindi mi permette la sola lettura e non la modifica dell'elemento)
*/



/* --- CANCELLARE LE PROPERTIES --- */

//Con l’operatore “delete” è possibile “cancellare” una property
    
    delete leone.verso
    console.log(leone)

/* Questa property però verrà eliminata ** SOLO ** non è una proprietà ereditata da un prototipo, 
infatti leone continua ad avere questa proprietà perchè l'ha ereditata da felino. 
Può essere usata tranquillamente per eliminare una property di un prototype però bisogna sempre fare ** ATTENZIONE ** a cancellare 
o modificare le proprietà di un oggetto o ancor di più ad un prototype perchè poi il cambiamento andrà ad impattare tutte le 
sue eredità. Quindi si consiglia sempre di clonare l'oggetto e modificare il clone.
Se invece:
*/

    leone.assalto = function(){/*...*/}
    console.log(leone) //qui vediamo aggiunta la proprietà assalto

    delete leone.assalto
    console.log(leone) //ora la proprietà viene eliminata

