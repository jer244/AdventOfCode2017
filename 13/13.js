const fs = require('fs');

var temp = [];
var input = new Map();
var severity = 0;
var caught = true;
var delay = 0;

//read file into array of rows
temp = fs.readFileSync('./input13.txt')
    .toString()
    .split('\r\n');

//format raw input into Map of [range, depth]
temp.forEach((str) => {
    let [, depth, range] = (/(\d+): (\d+)/).exec(str);
    input.set(Number(depth), Number(range));
});

//Part 1
for (var [depth, range] of input.entries()) {
    if (depth % (2*(range - 1)) == 0) {
        severity += depth * range;
    }
}

//Part 2
while(caught){
    caught = false;
    for (var [depth, range] of input.entries()) {
        if ((depth + delay) % (2*(range - 1)) == 0) {
            caught = true;
            break;
        }
    }
    delay++;
}

console.log("Part 1 = ", severity);
console.log("Part 2 = ", (delay-1));