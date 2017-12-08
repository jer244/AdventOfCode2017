const fs = require('fs');

let input;
let count = 0;

input = fs.readFileSync('./input4.txt')
    .toString()
    .split('\r\n');

input.forEach((e) => {
    let row = e.split(' ');
    row.sort();
    if (row.find((e, i) => { return e == row[i + 1]; }) == undefined) {
        count++;
    }
})

console.log(count);
