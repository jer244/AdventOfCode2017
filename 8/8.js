const fs = require('fs');

var input = [];
var inputArr = [];

input = fs.readFileSync('./input8.txt')
    .toString()
    .split('\r\n');

var registers = {};
var max = 0;
input.forEach((e) => {
    let temp = e.split(' ');    
    registers[temp[0]] = 0;
    inputArr.push(temp);
});

inputArr.forEach((e) => {
    if(eval(`registers.${e[4]} ${e.slice(5).join(' ').toString()}`)){
        if(e[1]=='inc'){
            registers[e[0]] += Number(e[2]);
            if(registers[e[0]] > max){
                max = registers[e[0]];
            }
        }
        else{
            registers[e[0]] -= Number(e[2]);
            if(registers[e[0]] > max){
                max = registers[e[0]];
            }
        }
    }
})

var values = Object.values(registers);
console.log(`8A = ${Math.max(...values)}`);
console.log(`8B = ${max}`);