//////////////     SCOPE    //////////////

/*

SCOPE = è l'ambito, la definizione/dichiarazione delle variabili

Lo scope determina l'accessibilità (visibilità) delle variabili. Js ha 3 tipi di scope:

            - BLOCK SCOPE       - FUNCTION SCOPE        - GLOBAL SCOPE

*/



//////////////    BLOCK SCOPE    //////////////

/*
Ovvero le variabili dichiarate all'interno di parentesi graffe:

        {let x = 2;}            // x non può essere usata fuori dalle graffe    
        
           oppure
        
        {var x = 2;}            // x può essere usata fuori dalle graffe

LET vale solo ed esclusivamente all'interno del block scope (=> tra {...}) mentre le variabili dichiarate con
VAR non possono avere un block scope (=> possono essere richiamate al di fuori di una {...})
*/



//////////////    FUNCTION SCOPE    //////////////

/*
Ovvero le variabili dichiarate all'interno di una funzione (che => hanno un LOCAL SCOPE) e alle quali è possibile accedervi 
solo dall'interno della funzione
Ad esempio:   
*/      
            // qui NON POSSO usare carName

            function myFunction(){
                let carName = "Volvo"
            }

            // qui NON POSSO usare carName
/*
Le variabili in local scope vengono riconosciute solo all'interno delle loro funzioni => variabili con lo stesso nome possono 
essere usate in funzioni diverse.

====> Le variabili locali vengono CREATE all'avvio di una funzione e CANCELLATE quando la funzione è completata

=> sia VAR che LET che CONST sono accessibili (=> visibili) solo all'interno della funzione
*/





//////////////    GLOBAL SCOPE    //////////////

/*
Sono le variabili dichiarate da un qualsiasi punto del programma (tranne ovviamente all'interno delle funzioni)
*/



//////////////    AUTOMATICALLY GLOBAL    //////////////

/*
Se una funzione viene istanziata prima ancora di essere dichiarata, allora le variabili che conterrà al suo interno diventeranno 
AUTOMATICAMENTE GLOBALI.

es.         myFunction();       // istanza

            // qui POSSO usare carName

            function myFunction(){
                let carName = "Volvo"
            }

            // qui POSSO usare carName

*/



//////////////    HOISTING    //////////////

/*
L'hoisting è la capacità di Js di spostare tutte le dichiarazioni all'inizio dell'ambito corrente (script o funzione).
Motivo per cui:
==> una variabile può essere istanziata prima ancora di essere dichiarata (questo non vale per let o const).

Tutto questo genera solo confusione!!! ====> SEMPRE MEGLIO DICHIARARLE PRIMA E NEL MODO CORRETTO
*/


//////////////    CALLBACKS    //////////////
