const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.


// primo metodo 
const maggiore15 = zucchine.filter( (element) => (element.length > 15))

const minore15 = zucchine.filter( (element) => (element.length < 15))

console.log(minore15, maggiore15)


// secondo metodo con ternario
const minor15 = []

const over15 = []

zucchine.filter((element) => (element.length > 15) ? (minor15.push(element)) : (over15.push(element) ))

console.log(minor15, over15)



