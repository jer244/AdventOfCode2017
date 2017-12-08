const fs = require('fs');

let input = fs.readFileSync('./input.txt')
    .toString()
    .split('\r\n');

let index = 0;
let count = 0;

while(index>=0 && index<input.length){
    let result = Number(input[index]);
    result >= 3 ? input[index]-- : input[index]++;
    index += result;
    count++;
}

console.log(count);