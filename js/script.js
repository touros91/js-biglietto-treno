// chiedo all'utente di inserire i chilometri che vuole percorrere 
var chilometri = parseInt(prompt('Inserisci il numero di chilometri che vuoi percorrere:'));

document.getElementById('chilometri').innerHTML += chilometri;

// chiedo all'utente la sua età 
var eta = parseInt(prompt('Inserisci la tua età:'));

document.getElementById('eta').innerHTML += eta;

// moltiplico il prezzo base del biglietto di 0.21€ per i chilometri da percorrere 
var prezzo = (0.21 * chilometri).toFixed(2);

// verifico le condizioni se l'utente ha inserito dei numeri, se si allora verifico se è minorenne o over 65 per applicare lo sconto rispettivo del 20% o 40% altrimenti si applica il prezzo base 
if (!isNaN(chilometri) && !isNaN(eta)) {
    if (eta < 18) {
    prezzo = (prezzo - (prezzo * 20 / 100)).toFixed(2);
    document.getElementById('prezzo').innerHTML += prezzo;
    } else if (eta > 65) {
    prezzo = (prezzo - (prezzo * 40 / 100)).toFixed(2);
    document.getElementById('prezzo').innerHTML += prezzo;
    } else {
        document.getElementById('prezzo').innerHTML += prezzo;
    }
} else {
    alert("Non hai inserito dei valori numerici. Riprova!")
}
