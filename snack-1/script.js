const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

let risultato = ""; 

names.forEach ( (element, index) => {
     risultato += `${element}, ${element}`;

})

console.log(risultato)