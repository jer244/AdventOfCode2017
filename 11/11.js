//refer to following for hex grid info - https://www.redblobgames.com/grids/hexagons/

const fs = require('fs');

var input = [];

input = fs.readFileSync('./input11.txt')
    .toString()
    .split(',');

const directions = {
    "n": [0,1,-1],
    "s": [0,-1,1],
    "nw": [-1,1,0],
    "se": [1,-1,0],
    "ne": [1,0,-1],
    "sw": [-1,0,1]
}

var final = input.reduce(([cur, maxD], dir)=> {
    let newPos = move(cur,dir);
    return ([newPos, Math.max(returnMax(newPos), maxD)])
}, [[0,0,0],0]);

//absolute value of largest coordinate is distance from start
console.log(`PartA = ${returnMax(final[0])}, PartB = ${final[1]}`);

function move(current, direction){
    return directions[direction].map((val, index) => val + current[index]);
}

function returnMax([x,y,z]){
    return Math.max(Math.abs(x), Math.abs(y), Math.abs(z));
}