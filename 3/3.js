let input = 361527;
let square = 0;

while (square * square < input) {
    square += 1;
}

let distance = Math.floor(square / 2);
let position = input - (square - 1) * (square - 1);

if (position > square) {
    position -= (square - (square % 2));
}

console.log(square, distance, position);
console.log(distance + Math.abs(Math.ceil((square) / 2) - position))
