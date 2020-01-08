// alert('ciao');

// lista cognomi
var cognomi = ['Rand', 'Stark', 'Banner', 'Murdock', 'Roger'];
console.log(cognomi);

// Inserimento cognome Utente
var cognomeUtente = prompt('Inserisci il tuo cognome');
cognomeMaiuscolo = cognomeUtente.charAt().toUpperCase() + cognomeUtente.substring(1);
cognomi.push(cognomeMaiuscolo);
console.log(cognomi);

// Ordinare alfabeticamente
cognomi.sort();
console.log(cognomi);
 for (var i = 0; i < cognomi.length; i++) {
   document.getElementById('lista') .innerHTML  += '<li>' + cognomi[i] + '</li>';
 }

var posizione = cognomi.indexOf(cognomeUtente) + 1;
 document.getElementById('posizione') .innerHTML  = "Il cognome da te inserito nella " + posizione + " dell'elenco.";

document.getElementById('lista').classList.add('list_style');
