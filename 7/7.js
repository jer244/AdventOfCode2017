const fs = require('fs');

var input = [];
var myMap = new Map();

input = fs.readFileSync('./input7.txt')
    .toString()
    .split('\r\n');

for (v of input) {
    let [
        node,
        weightStr,
        arrow,
        ...children
    ] = v.split(' ');

    children.forEach((e, idx) => {
        if(e[e.length-1] == ','){
            children[idx] = e.slice(0, -1);
        }
    })

    let obj = {
        node,
        weight: Number(weightStr.slice(1, -1)),
        children,
        parents: []
    }
    myMap.set(node, obj);
}

myMap.forEach((val, key, map) => {
    val.children.forEach((e) => {
        let tmp = myMap.get(e);
        tmp.parents.push(val.node);
    })
})

var itr = myMap.values();

var cont = true;

while(cont){
    let tmp = itr.next().value;
    if(tmp.parents.length == 0){
        console.log(tmp.node);
        cont = false;
    }
}





