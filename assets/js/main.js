// chiede il nome

var nome = prompt("Qual'è il tuo nome ?")
console.log(nome);

// chiede il cognome

var cognome = prompt("Adesso dimmi il tuo cognome")
console.log(cognome)

// stampo saluto
document.getElementById('ciao').innerHTML = "Ciao " + nome + " " + cognome

// chiede il colore preferito

var colore = prompt("Ultimo step dimmi il tuo colore preferito")
console.log(colore);

// stampo la password consigliata

document.getElementById('password-consigliata').innerHTML = "La password consigliata è: " + nome + cognome + colore + "21"
