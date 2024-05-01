let sozlar = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina', 'kabob', 'namoz' ];
let nbor = [];
let nyoq = [];

for (let i = 0; i < 9; i++) {
    if (sozlar[i].indexOf('n') !== -1) {
        nyoq.push(sozlar[i]);
    } else {
        nbor.push(sozlar[i]);
    }
}

console.log(nbor);
console.log(nyoq);