// alert('ciao');

// lista cognomi
var cognomi = ['Rand', 'Stark', 'Banner', 'Murdock', 'Roger'];
console.log(cognomi);

// Inserimento cognome Utente
var cognomeUtente = prompt('Inserisci il tuo cognome');
cognomeMaiuscolo = cognomeUtente.toUpperCase(0);
cognomi.push(cognomeMaiuscolo);
console.log(cognomi);

// Ordinare alfabeticamente
cognomi.sort();
console.log(cognomi);
