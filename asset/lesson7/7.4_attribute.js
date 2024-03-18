    /*   ----   SET ATTRIBUTE ----   */

    // Gli attributi di un codice html sono: id - class - style - title ecc. 
    // con js abbiamo la possibilità di andare a creare e/o manipolare questi attributi

    let heading = document.querySelector('h1')

    heading.setAttribute('id','newId')
    heading.setAttribute('class','title')
    console.log(heading)

    // nell'esempio qui sopra ho creato una variabile che corrisponde al mio h1 ed, a quella, ho applicato il metodo .setAttribute.
    /* questo metodo permette di: 
    
        - modificare gli attributi esistenti come id
        - e aggiungere attributi come class

    .setAttribute vuole due parametri identificati entrambi come STRINGHE (quindi con le virgolette), dove 
        1) è l'attributo stesso da aggiungere/modificare 
        2) il nome che vogliamo dare a quell'attributo
    */

        console.log(heading.id)
        console.log(heading.className)


    /*   ----   GET & HAS ATTRIBUTE ----   */

    // .getAttribute e .hasAttribute sono 2 metodi che ci consentono di analizzare gli attributi html (quindi controllare se sono presenti o meno degli attributi e controllare i loro valori):

    // con .hasAttribute possiamo controllare se l'attributo è presente:

    console.log(heading.hasAttribute('class'))      // restituisce TRUE se l'elemento html ha l'attributo selzionato come paramentro
    console.log(heading.hasAttribute('title'))      // restituisce FALSE in caso contrario

    // con .getAttribute possiamo controllare il valore dell'attributo:

    console.log(heading.getAttribute('class'))      // restituisce il valore assegnato a class (=> title)
    console.log(heading.getAttribute('id'))         // restituisce il valore assegnato a id (=> newId)
    console.log(heading.getAttribute('style'))      // restituisce NULL perchè l'attributo non è presente

    // creiamo una semplice funzione di controllo

    if (heading.hasAttribute('class')) {
        console.log(heading.getAttribute('class'))
    } else {
        console.log('Attribute is not present')
    }

    // ci restituisce TITLE in quanto è il valore dell'attributo class.

    // al contrario, se l'attributo non è presente:

    if (heading.hasAttribute('style')) {
        console.log(heading.getAttribute('style'))
    } else {
        console.log('Attribute is not present')
    }



    /*   ----   REMOVE ATTRIBUTE ----   */

    let subheading = document.querySelector("h2")

    console.log(subheading.removeAttribute('id'))            // l'id è stato eliminato

    console.log(subheading.removeAttribute('class'))         // la classe è stata eliminata
    console.log(subheading)                                  // h2 è ora senza attributi




    /*   ----   STYLE ATTRIBUTE ----   */

    // vediamo una serie di metodi per aggiungere e/o manipolare il css (=> lo style) di un elemento html

    let h3Style = document.querySelector('h3')

    console.log(h3Style.style.color)                                            // così vediamo il colore applicato
    console.log(h3Style.style.backgroundColor)                                  // così lo sfondo
    console.log(h3Style.style.color='blue')                                     // così modifichiamo solo il colore
    console.log(h3Style.style.backgroundColor='aqua')                           // così solo sfondo
    console.log(h3Style.style.cssText='color:black; background-color:green')    // così invece scriviamo un'intera regola css in js

    
    // in quest'ultimo esempio vediamo come applicare uno stile all'h4 che invece non ha nessuno stile applicato tramite setAttribute
    let h4Style = document.querySelector('h4')
    console.log(h4Style.setAttribute('style','color:yellow; background-color:red'))                                            
    



    /*   ----   MANIPULATING CLASSES ----   */

    // Un altro modo per aggiungere una classe oltre a setAttribute è className

    let h5class = document.querySelector('h5')

    console.log(h5class.className='banner')         // con className aggiumgiamo una classe ad h5 che ne è privo
    console.log(h5class.className='altra-classe')   // se lo usiamo nuovamente per aggiungere una classe ulteriore, notiamo che invece di aggiungersi, la nuova classe va a sostituire quella precedente

    // quindi come aggiungere una classe ad una già presente? così:

    console.log(h5class.className +=' classe-aggiunta')     
    //  per aggiungere una classe possiamo quindi utilizzare il simbolo di concatenazione += e la stringa contenente il nome della mia classe. Ricorda che in quanto concatenazione di stringhe bisogna mettere lo SPAZIO altrimenti le due classi (altra-classe e classe-aggiunta) non verranno separate.

    // un altro metodo per aggiungere classi è usare il metodo add su classList. classList tratta le classi applicate come un array:

    console.log(h5class.classList[1])    // segnaliamo la posizione come fossero un array
    console.log(h5class.classList.add('class1','class2','class3'))  // applicando .add possiamo aggiungere quante più classi vogliamo in una botta sola

    console.log(h5class)

    // a classList possiamo applicare anche REMOVE and REPLACE per rimuovere o rimpiazzare una classe:

    console.log(h5class.classList.remove('class3'))   // abbiamo rimosso la class3 aggiunta tramite .add
    console.log(h5class.classList.replace('class2','classTwo'))   // abbiamo rimosso la class2 per rimpiazzarla con classTwo (qui restituisce anche un true in console..ma non so perchè)

    // invece per verificare che le classi esistano in un certo array di classi usiamo .contains

    console.log(h5class.classList.contains('class3'))   // avendola rimossa prima, la console restituisce false
    console.log(h5class.classList.contains('class1'))   // true perchè esiste


