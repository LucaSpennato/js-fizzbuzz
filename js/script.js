// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// BONUS 1: Crea un container nel DOM e aggiungendo (attravero la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
// Buon lavoro e buon divertimento! 

// METODO DI RISOLUZIONE POCO ELEGANTE, IN QUESTO METODO è MENO ESPLICITO
// QUESTO COMANDO SENZA IL NOT, PORTA A 0 I NUMERI DIVISIBILI
// DUNQUE, HA PIù SENSO DIRE CHE INDEX DEVE ESSERE == 0, MA MEGLIO SEMPRE PIù ESPLICITI 
// CON INDEX === 0, PER DIRGLI DI PRENDERE QUEI NUMERI CHE SON STATI ''AZZERATI'' MEGLIO DIRE 'DIVISIBILI', 
// ANZICHè QUELLI NON(NON PRENDERE I DIVISIBILI) CAUSA STORTURA JS DOVE 0 è ANCHE FALSE
// nei multipli comuni, vince prima chi è più in alto
// quindi mettiamo not i % 3 &&  i % 5 in alto 
// if ((!(index % 3)) && (!(index % 5))) {
//     console.log(index + 'fizzbuzz');
// } else if (!(index % 5)){
//     console.log(index + 'buzz')
// } else if (!(index % 3))  {
//     console.log(index + 'fizz')
// } else {
//     console.log(index);
// }

// selezioniamo il main
const mainElement = document.querySelector('main');

// aggiungiamo una row di bootstrap, chiamando la variabile rowElement
const rowElement = document.createElement('div');

// aggiungiamo a rowElement
rowElement.classList.add('row');

// aggiungiamo SOLO UNA VOLTA rowElement a main
mainElement.append(rowElement);

//  ulElement.classList.add('');

for (let index = 1; index <= 100; index++) {
    
    // creiamo un div element nel dom, la variabile avrà il nome di divElement
    const divElement = document.createElement ('div');

    // a questo div diamo i numeri in crescita di index per ogni div
    divElement.append(index);

    // aggiungiamo ai div le classi volute
    divElement.classList.add('col-3');

    // COSA PIù IMPORTANTE ALTRIMENTI NON FUNZIA NA MAZZA:
    // mettiamo i div nel singolo row creato
    rowElement.append(divElement);

    // IN QUESTO CASO, DICIAMO DI PRENDERE I NUMERI CHE DANNO RISULTATO 0, STRETTO STRETTO CON ===
if ((index % 3 === 0 ) && (index % 5 === 0)) {

    // DATO CHE VOGLIAMO SORASCRIVERE USIAMO .innerHTML = 'QUALCOSA'
    // LASCIANDO INTATTO E COMUNE IL divElement.append(index); FUORI
    divElement.innerHTML = 'fizzbuzz';
    console.log('fizzbuzz');

} else if (index % 5 === 0){

    divElement.append = 'buzz';
    console.log('buzz')

} else if (index % 3 === 0){

    divElement.innerHTML = 'buzz';
    console.log('fizz')

} else {
    console.log(index);
}

}