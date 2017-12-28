var lengths = [94, 84, 0, 79, 2, 27, 81, 1, 123, 93, 218, 23, 103, 255, 254, 243];
var lenString = '94,84,0,79,2,27,81,1,123,93,218,23,103,255,254,243';

var ascii = []

var currPos = 0;
var list = [];
var listCount = 256;

for (let i = 0; i < lenString.length; i++) {
    ascii.push(lenString.charCodeAt(i));
}

ascii = ascii.concat(17, 31, 73, 47, 23);

for (let i = 0; i < 256; i++) {
    list.push(i);
}


for (let skip = 0; skip < lengths.length; skip++) {
    reverse(currPos % listCount, lengths[skip]);
    currPos += lengths[skip] + skip;
}

console.log(`10A = ${list[0] * list[1]}`);

////////////////////////part 2////////////////

list = [];
currPos = 0;

for (let i = 0; i < 256; i++) {
    list.push(i);
}

var skip = 0;
for (let i = 0; i < 64; i++) {
    for (let j = 0; j < ascii.length; j++) {
        reverse(currPos % listCount, ascii[skip % ascii.length]);
        currPos += ascii[skip % ascii.length] + skip;
        skip++;
    }
}

var dense = [];

for (let i = 0; i < 256; i += 16) {
    var str = '';
    for (let j = 0; j < 16; j++) {
        str += list[i + j].toString();
        if (j < 15) {
            str += '^'
        }
    }
    dense.push(eval(str));
}

//CONVERT TO HEX WITH LEADING 0
var denseHex = dense.map((e) => {
    if (e.toString(16).length == 1) {
        return '0' + e.toString(16);
    } else {
        return e.toString(16);
    }
});

console.log(denseHex.join(''));

function reverse(current, length) {
    let temp = [];
    for (let i = 0; i < length; i++) {
        temp.push(list[(current + i) % listCount])
    }
    for (let i = 0; i < length; i++) {
        list[(current + i) % listCount] = temp[(length - 1) - i];
    }
}
