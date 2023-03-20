/* OBJECT PART 2 */

/* --- TESTARE LE PROPERTIES --- */

//Per verificare se un oggetto possiede o meno una property possiamo usare:
    // leone.caccia = "..."
    // leone.hasOwnProperty("caccia")
    leone.hasOwnProperty("verso")
    console.log(leone)
/*
    - utilizzare il metodo o.hasOwnProperty()
    - utilizzare il metodo o.propertyIsEnumerable()
    - semplicemente richiedere la prop. (dot notation, index..)
    - utilizzare l’operatore in -> “propName” in o.
*/


/* --- ITERARE SU TUTTE LE PROPERTIES --- */

/*
    - Il for/in (già visto..)
    - Per evitare di enumerare property ereditate, usare il metodo hasOwnProperty
    - I seguenti metodi ritornano un array di prop:
    - Object.keys() // ritorna i nomi delle prop include le prop. non enumerabili, ereditate o prop il cui name è un symbol.
    - Reflect.ownKeys() // ritorna i nomi di tutte le prop. non ereditate (enumerabili*non enumerabili)
    - Object.getOwnPropertyNames() // prop. non ereditate, ma con name come string.
    - Object.getOwnPropertySymbols() // prop. non ereditate, ma con name come Symbol.
*/


/* --- METODI DEGLI OGGETTI --- */

/*
Un Object può contenere anche delle funzioni. Quando una funzione è definita all’interno di un Object si chiama metodo.
Il prototype Object fornisce alcuni metodi di base. Ne vediamo alcuni:

    - toString() // fornisce la rappresentazione testuale dell’oggetto
    - toLocaleString() // rappresentazione testuale influenzata dalle impostazioni di localizzazione del browser.
    - valueOf() // tipo il toString(), fornisce rappresentazione “numerica” dell’oggetto. (vedi Date).
    - toJSON() // Non fornito dal prototype Object.. ma previsto.. Se un oggetto specifica un proprio metodo toJSON(), quando
    viene serializzato per mezzo di JSON.stringify(o), viene invocato il metodo toJSON() dell’oggetto.
*/


/* --- OBJECT GETTERS & SETTERS --- */

/*
Un Object può definire degli “speciali” metodi chiamati getters, o setters che servono a richiedere o ad impostare il valore delle
property a cui si riferiscono.

        var o = {
            dataProp: value,
            get accessorProp() { return this.dataProp; }
            set accessorProp(value) { this.dataProp = value }
        }
*/