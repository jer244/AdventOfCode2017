const fs = require('fs');

let input = [];
let sum = 0;

input = fs.readFileSync('./input.txt')
    .toString()
    .split('\r\n');

input.forEach((e) => {
    let row = e.split('\t');
    let min = row.reduce((a, b) => { return Math.min(a, b) });
    let max = row.reduce((a, b) => { return Math.max(a, b) });
    sum += max - min;
})

console.log('2A = ' + sum);

let sumB = 0;
input.forEach((e) => {
    let row = e.split('\t');
    let value = 0;
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < row.length; j++) {
            if (i != j) {
                if (row[i] % row[j] == 0) {
                    value = row[i] / row[j];
                    break;
                }
            }
        }
        if (value) {
            sumB += value;
            break;
        }
    }
})

console.log('2B = ', sumB);
