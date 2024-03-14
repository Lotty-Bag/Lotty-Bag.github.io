    
    /*   ----   INSERT BEFORE ----   */

    // Permette di creare nodi all'interno di altri nodi già creati => quindi di creare elementi e di inserirli all'interno di altri elementi html già creati

    // andiamo a selezionare il nodo all'interno del quale vogliamo inserire il nuovo elemento
    let parent = document.querySelector("ul")

    // la nostra condizione di può riassumere così :
    //      
    //        parentNode.insertBefore(newNode,existingNode)
    //
    // dove: il nostro parentNode è <ul>; .insertBefore() è il nostro metodo che porta due parametri 
    // 1) newNode = nuovo nodo da creare    2) existingNode = il nodo esistente che prendiamo come riferimento per l'inserimento

    // quindi non ci resta che identificare il nodo di riferimento

    let existingNode = document.querySelector("li")      // così sappiamo che come riferimento prendiamo il primo <li>
    
    // e creare il nuovo nodo

    let newNode = document.createElement("li")
    newNode.textContent ='Matcha'
    
    // a questo punto "uniamo i puntini" e avendo preso il 1° <li> come riferimento il nostro nuovo nodo comparirà in prima posizione

    parent.insertBefore(newNode, existingNode)

    // se avessi voluto inserire Matcha dopo Tea invece che prima avrei potuto scrivere

    //      parent.insertBefore(newNode, existingNode.nextElementSibling)

    // e se avessi voluto spostarlo in fondo alla lista:

    //      parent.insertBefore(newNode, existingNode.nextElementSibling.nextElementSibling)

    // Chiaramente questo non è il metodo più efficace, di conseguenza possiamo applicare le regole seguenti di append e prepend. 



    /*   ----   APPEND & PREPEND ----   */

    // vogliamo aggiungere altri elementi alla nostra lista. creiamoli:
    
    let item1 = document.createElement("li")
    item1.textContent = "Juice"

    let item2 = document.createElement("li")
    item2.textContent = "Cappuccino"

    // usiamo append per aggiungerli alla FINE della nostra lista

    parent.append(item1,item2)

    // ora creiamo altri elementi e usiamo prepend per portarli invece all'INIZIO della nostra lista

    let item3 = document.createElement("li")
    item3.textContent = "Vino"

    let item4 = document.createElement("li")
    item4.textContent = "Cola"

    let item5 = document.createElement("li")
    item5.textContent = "Soup"

    parent.prepend(item3,item4,item5)

    // come si può notare con append e prepend possiamo aggiungere quanti item vogliamo

    //in questo ultimo esempio vogliamo vedere la differenza tra append e appendChild

    let item6 = document.createElement("li")
    item6.textContent = "Cocktail"

    let item7 = document.createElement("li")
    item7.textContent = "Soft Drink"

    parent.appendChild(item6,item7)

    // viene aggiunto solo l'item6 perchè ad appendChild possiamo passare UN SOLO PARAMETRO


    
    
    /*   ----   REPLACE & REMOVE CHILD NODE ----   */

    // Come recita il titolo questi due metodi servono per rimpiazzare o rimuovere un nodo figlio. Avrei potuto usare i metodi precedenti per identificare il parent o il primo figlio, ma sarebbero stati selezionati i primi elementi della prima lista. Ed io volevo applicare la regola ad una nuova lista, quindi ho usato altri metodi di richiamo.

    let parent2 = document.getElementById("frutta")

    let nuovoNode = document.createElement("li")
    nuovoNode.textContent = "Mango"

    let oldNode = parent2.firstElementChild

    parent2.replaceChild(nuovoNode,oldNode)

    //qui sopra ho sostituito pera con mango

    let removeNode = parent2.lastElementChild

    parent2.removeChild(removeNode)
    
    //qui sopra ho eliminato banana



    /*   ----   CLONE NODE ----   */

    // Per clonare un nodo usiamo .cloneNode che vuole come paramentro true o false 

    let node = parent2

    let cloneNode = node.cloneNode(true)

    // Con il paramentro TRUE stiamo copiando il nodo (ul) e tutti i suoi figli (li)
    // Con il paramentro FALSE copiamo SOLO il nodo (ul) e tralasciamo tutti i suoi figli

    document.body.appendChild(cloneNode)