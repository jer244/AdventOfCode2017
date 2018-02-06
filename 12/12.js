const fs = require('fs');

var input = [];
var programMap = new Array(2000).fill(0);

input = fs.readFileSync('./input12.txt')
    .toString()
    .split('\r\n');

var parsed = input.map(parse);
var count = 1;

// Part 1
// find(0);
// console.log("Part 1 total = ", programMap.reduce(sum, 0));

// Part 2
for (let i = 0; i < parsed.length; i++) {
    if (programMap[i] == 0) {
        find(i);
        count++;
    }
}
console.log(Math.max(...programMap));

function parse(str) {
    let [, p] = /\d+ <-> ((\d+)(, \d+)*)/.exec(str);
    return p.split(', ');
}

function find(val) {
    if (programMap[val] == 0) {
        programMap[val] = count;
        for (let i = 0; i < parsed[val].length; i++) {
            find(parsed[val][i]);
        }
    }
    return;
}

function sum(a, b) {
    return a + b;
}

