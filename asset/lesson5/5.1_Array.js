/* -----    ARRAY   ----- */

/*
Array è un tipo di oggetto usato per memorizzare multipli valori in una singola variabile.
Ogni valore ha un “indice” numerico che parte da 0, dato dalla sua posizione nella collezione, e può contenere dati di ogni tipo: Boolean, Numbers, Strings, Functions, Objects

    CREARE UN ARRAY:
    - var a = new Array();
    - var a = [];           -> var a1 = [ ‘firstValue’, ‘secondValue’ ];
    - I valori sono assegnabili anche dopo aver creato l’array:
        var a = new Array(); a[0] = ‘firstValue’; a[1] = ‘secondValue’;
*/


/* ---    ARRAY METHODS   --- */
/*
    ** ARRAY.length ritorna la “lunghezza” di un Array ma attenzione che è determinata dall’indice e non dal numero di item contenuti.

    ** Metodi di ordinamento:
        - array.sort(); -> ordina gli elementi in ordine ascendente. 
        - array.reverse(); -> inverte l’ordine degli elementi. (attenzione non equivale ad un sort reverse).
        
    ** Metodi di iterazione sui dati:
        - array.forEach() -> esegue un function per tutti gli elementi non ritorna niente. 
        - array.map() -> esegue una function per tutti gli elementi e ritorna come risultato un nuovo array, con gli elementi “modificati”. 
        - array.flatMap() -> esegue un array.Flat() + un array.map(). 
    
    ** Metodi di aggregazione:
        - array.concat() -> lega all’array tutti gli array passati 
        - array.join() -> lega tutti gli elementi di un array in una stringa 
        - array.reduce() -> lega tutti gli elementi di un array per mezzo di una function reducer (definita dal programmatore) 

    ** Metodi di disaggregazione:
        - array.slice() -> ottiene una porzione dell’array passato 
        - array.splice() -> cambia il contenuto dell’array rimuovendo o rimpiazzando gli elementi esistenti oppure aggiungendo
        nuovi elementi.. 

    ** Metodi di ricerca:
        - array.find() -> ritorna il primo elemento che corrisponde ai criteri di ricerca passati (per i tipi di riferimento) 
        - per i tipi primitivi:
        - array.indexOf() -> ritorna l’indice o -1 del primo elemento corrispondente a quello passato. 
        - array.findIndex() -> ritorna l’indice o -1 del primo elemento corrispondente a quello passato. 
        - array.lastIndex() -> ritorna l’indice o -1 dell’ultimo elemento corrispondente a quello passato. 
    
    ** Metodi di indagine da usare nelle condizioni:
        - array.every() -> ritorna true se tutti gli elementi corrispondono al criterio di ricerca. 
        - array.some() -> ritorna true se alcuni degli elementi corrispondono al criterio di ricerca. (da
        usare per i tipi di riferimento). 
        - array.includes() -> ritorna true se alcuni degli elementi corrispondono al criterio di ricerca.
        (da usare per i tipi primitivi). 

    ** Metodi di aggiornamento:
        - array.pop() -> rimuove l’ultimo elemento nell’array. 
        - array.shift() -> rimuove il primo elemento nell’array. 
        - array.push() -> aggiunge un elemento passato in coda agli elementi dell’array. 
        - array.unshift() -> aggiunge l’elemento passato davanti a tutti gli altri elementi dell’array. 
*/