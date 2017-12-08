const fs = require('fs');

let input;
let countA = 0;
let countB = 0;

input = fs.readFileSync('./input4.txt')
    .toString()
    .split('\r\n');

input.forEach((e, i) => {
    input[i] = e.split(' ')
})

input.forEach((row) => {
    row.sort();
    if (row.find((e, i) => { return e == row[i + 1]; }) == undefined) {
        countA++;
    };
    let sorted = row.map(e => e.split('').sort().join(''));
    sorted.sort();
    if (sorted.find((e, i) => { return e == sorted[i + 1]; }) == undefined) {
        countB++;
    };
})

console.log('4A = ' + countA + ' 4B = ' + countB);