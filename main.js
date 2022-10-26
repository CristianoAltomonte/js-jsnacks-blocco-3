// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a 
// quando la somma degli elementi è minore di 50.

let arrayVuoto = [];
let somma = 0;


function numero() {

    while (somma < 50) {

        let numeroUtente = parseInt(prompt('Numero di biglietti da acquistare ?'));
        arrayVuoto.push(numeroUtente);
        somma = somma + numeroUtente;
        console.log(arrayVuoto, somma);

        if (somma > 50) {
            alert('Biglietti Esauriti')
        }
    }
}

// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

function numero() {

    somma = 0
    i = 0

    while (i < 5) {

        let numeroUtente = parseInt(prompt('Inserisci un numero'))
        arrayVuoto.push(numeroUtente);
        somma = somma + numeroUtente;

        i++

    }
    console.log("La somma di tutti i numeri inseriti è: " , somma);

}


// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.


