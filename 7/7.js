const fs = require('fs');

var input = [];
var myMap = new Map();

//SPLIT INPUT INTO ARRAY OF STRING BY ROWS
input = fs.readFileSync('./input7.txt')
    .toString()
    .split('\r\n');

//PARSE INPUT INTO A MAP
for (v of input) {
    let [
        node,
        weightStr,
        arrow,
        ...children
    ] = v.split(' ');

    //GET RID OF COMMAS 
    children.forEach((e, idx) => {
        if(e[e.length-1] == ','){
            children[idx] = e.slice(0, -1);
        }
    })

    //CREATE MAP
    let obj = {
        node,
        weight: Number(weightStr.slice(1, -1)),
        children,
        parents: [],
        nodeWeight: 0
    }
    myMap.set(node, obj);
}

//MAP PARENT VALUES
myMap.forEach((val, key, map) => {
    val.children.forEach((e) => {
        let tmp = myMap.get(e);
        tmp.parents.push(val.node);
    })
})

//CREATE ITERATOR
var itr = myMap.values();

var cont = true;
var root = '';

//FIND AND LOG NODE THAT DOESN'T HAVE A PARENT
while(cont){
    let tmp = itr.next().value;
    if(tmp.parents.length == 0){
        console.log(`7A = ${tmp.node}`);
        root = tmp.node;
        cont = false;
    }
}

//CALCULATE nodeWeights
function nodeWeight(node){
    return node.weight + node.children.reduce((acc, curr) => acc + nodeWeight(curr), 0);
}

nodeWeight(myMap.get(root));

console.log(myMap);





