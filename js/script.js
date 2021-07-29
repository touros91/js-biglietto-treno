// chiedo all'utente di inserire i chilometri che vuole percorrere 
var chilometri = parseInt(prompt('Inserire il numero di chilometri da percorrere'));
// chiedo all'utente la sua età 
var eta = parseInt(prompt('Inserire l’età'));
// moltiplico il prezzo base del biglietto di 0.21€ per i chilometri da percorrere 
var prezzo = (0.21 * chilometri).toFixed(2);

// verifico le condizioni se l'utente è minorenne o over 65 per applicare lo sconto rispettivo del 20% o 40% altrimenti si applica il prezzo base 

if (eta < 18) {
prezzo = (prezzo - (prezzo * 20 / 100)).toFixed(2);
alert('Il prezzo del biglietto é: ' + prezzo);
} else if (eta > 65) {
prezzo = (prezzo - (prezzo * 40 / 100)).toFixed(2);
alert('Il prezzo del biglietto é: ' + prezzo);
} else {
alert('Il prezzo del biglietto é: ' + prezzo);
}
