console.log('JS OK')



/* OPERAZIONI PRELIMINARI */


// TODO Recupero elemento dal DOM

// Stabilisco tariffe di prezzo e sconti per età

// Percentuale di sconto per maggiorenni
const discountAdult = 20;

// Percentuale di sconto per over65
const discountSenior = 40;

// Soglie di età
const adultAge = 18;
const seniorAge= 65;

// Prezzo al km
const kmPrice = 0.21; 



// Chiedo all'utente il numero di km che vuole percorrere e salvo la risposta

const userTravelDistance = parseInt(prompt('Quanti km vuoi porcorrere?' , ' 20'));
console.log(userTravelDistance);


// Chiedo all'utente la sua età e salvo la risposta

const userAge = parseInt(prompt('Qunati anni hai?' , '37'));
console.log(userAge);



