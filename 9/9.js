const fs = require('fs');

var input = [];
var level = 0;
var score = 0;
var garbage = false;
var garbCount = 0;

input = fs.readFileSync('./input9.txt')
    .toString()
    .split('');

input.forEach((e, idx) => {
    if(garbage){
        if(e == '>'){
            garbage = false;
        }
        else if(e == '!'){
            input[idx+1] = ' ';
        }
        else if(e != ' '){
            garbCount++;
        }
    }else{
        if(e == '{'){
            level++;
            score += level;
        }
        if(e == '}'){
            level--;
        }
        if(e == '<'){
            garbage = true;
        }
    }
})


console.log(`9A = ${score}`);
console.log(`9B = ${garbCount}`);