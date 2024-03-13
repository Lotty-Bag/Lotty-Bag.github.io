
    /*   ----   CREATE ELEMENT ----   */

    // vediamo come creare un elemento all'interno del body del nostro html
    let element = document.createElement('div')     // con .createElement possiamo creare elementi attraverso i tag hmtl
    element.innerHTML = '<h1>Questo titolo è dentro un div creato con js</h1> '         
    document.body.appendChild(element)              // aggiungo un 'figlio' a body identificando quindi body come 
    console.log(element.parentNode)                 // identificando quindi body come Genitore

    let sottotitolo = document.createElement('h4')
    sottotitolo.innerText = 'questo invece è un sottotitolo creato con js'

    document.body.appendChild(sottotitolo)

    // se devo aggiungere qualcosa direttamente nel body uso document.body altrimenti, come nell'esempio sotto, aggiungo .appendChild direttamente alla variabile di cui si necessita la creazione

    // ho creato nel body un <ul> vuoto 
    let listItem = document.createElement('li')         // creo un <li> e lo riempio
    listItem.innerText = 'Item 1'

    let list = document.querySelector('ul')             // creo una variabile selezionando l'ul
    list.appendChild(listItem)                          // aggiungo il li all'ul tramite appenChild ma senza il document (come evidenziato prima)

    // se ora guardiamo la preview sul web vedremo che nonostante la creazione del <li> sia l'ultima regola scritta, appare per primo sullo schermo. questo perchè il codice html viene letto come un libro dall'alto verso il basso e di conseguenza prima leggerà l'<ul> presente nel body e dopo il nostro file js.


   /*   ----   DOCUMENT FRAGMENT ----   */

   // questo metodo mi permette di creare dei frammenti di codice in js all'interno del mio documento html. è sempre consigliato creare tag direttamente nell'html ma, se si ha necessità di aggiungere elementi tramite il js, allora è meglio usare questo approccio con DocumentFragment.
   // questo è comodo anche perchè si ha la possibilità di creare più nodi.

   // creiamo il nostro nuovo frammento di documento
   let fragment = new DocumentFragment()
    
    // lo riempiano creando un h2
   let heading = document.createElement('h2')
   heading.textContent = 'Questo h2 è creato dentro un documentFragment'

   // lo riempiano creando un h3
   let subheading = document.createElement('h3')
   subheading.textContent = 'Questo h3 è creato dentro un documentFragment'

   // aggiungiamo h1 e h3 al frammento 
   fragment.appendChild(heading)
   fragment.appendChild(subheading)

   // e lo attacchiamo come figlio al body
   document.body.appendChild(fragment)