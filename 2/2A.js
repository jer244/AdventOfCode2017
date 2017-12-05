const fs = require('fs');

let input = [];
let sum = 0;

input = fs.readFileSync('./input.txt')
    .toString()
    .split('\r\n');

input.forEach((e)=>{
    let row = e.split('\t');
    let min = row.reduce((a,b)=> {return Math.min(a, b)});
    let max = row.reduce((a,b)=> {return Math.max(a, b)});
    sum += max - min;    
})

console.log('2A = ' + sum);
