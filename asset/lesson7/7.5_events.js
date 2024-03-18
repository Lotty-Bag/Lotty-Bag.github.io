
/*   -----------------------   THE EVENTS   -----------------------   */

/* Gli eventi sono esattamente "cose che accadono quando l'utente interagisce con il contenuto della pagina".
   Alcuni esempi di eventi:

    - Quando un utente fa clic con il mouse
    - Quando una pagina web è stata caricata
    - Quando un'immagine è stata caricata
    - Quando il mouse si sposta su un elemento
    - Quando un campo di input viene modificato
    - Quando viene inviato un modulo HTML
    - Quando un utente preme un tasto

*/

/*   ----   ONCLICK ----   */

// un esempio è l'onclick: che possiamo scriverlo direttamente nell'elemento html (vedi h2 su pag html); 
// oppure possiamo usare i metodi imparati sino ad ora per aggiungere on click come attributo:

let h2onclick = document.getElementById('clickJs')

h2onclick.setAttribute("onclick","this.innerHTML = 'h2 clicked'")

// oppure possiamo scrivere una funzione e richiamarla nell'onclick (=> onclick ="hello()")

let h2Hello = document.getElementById('hello')

function hello(){
    h2Hello.textContent ='La function hello() funziona!'
    // possiamo usare .textContent o .innerHtml o similari
}

/*   ----   ADD EVENT LISTENER ----   */

// qui sopra abbiamo visto come funziona l'onclick, tuttavia è buona norma non scrivere gli eventi all'interno del codice html, ma lasciare invece html e js SEPARATI. Questo perchè se scriviamo l'evento direttamente nell'html, questo verrà eseguito prima del caricamento del file js che si trova in fondo al body. 
// Quindi è buona norma applicare gli eventi direttamente dal file Js come mostrato di seguito:

let element = document.getElementsByTagName('h1')[1]

console.log(element)

element.addEventListener('click', function () {
    element.innerHTML = 'hai cliccato!'
})
// al posto innerHTML possiamo usare anche innerText, ed al posto di element possiamo scrivere this come nell'esempio sotto.


/*   ----   MOUSEOVER & MOUSEOUT ----   */

let element2 = document.getElementsByTagName('h1')[2]

element2.addEventListener('mouseover', function () {
    this.innerHTML = 'sei passato sopra l\'elemento col mouse'
    this.style.color = "red"
})


element2.addEventListener('mouseout', function () {
    this.innerText = 'hai tolto il mouse dall\'elemento'
    this.style.color = "green"
})

// chiaramente all'interno delle funzioni possiamo anche cambiare lo stile 