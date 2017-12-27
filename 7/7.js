const fs = require('fs');

var input = [];
var programs = {};

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
        if (e[e.length - 1] == ',') {
            children[idx] = e.slice(0, -1);
        }
    })

    //CREATE OBJECT AND ADD TO PROGRAMS OBJ
    let obj = {
        node,
        weight: Number(weightStr.slice(1, -1)),
        children,
        parents: [],
        nodeWeight: 0
    }
    programs[node] = obj;
}
//MAP PARENT VALUES
for (v in programs) {
    programs[v].children.forEach((e) => {
        programs[e].parents.push(v);
    })
}

var root = '';

//FIND AND LOG NODE THAT DOESN'T HAVE A PARENT
for (v in programs) {
    if (programs[v].parents.length == 0) {
        root = v;
        console.log(`7A = ${root}`);
    }
}

//CALCULATE nodeWeights
function findNodeWeight(node) {
    if (programs[node].children.length == 0) {
        programs[node].nodeWeight = programs[node].weight;
        return programs[node].weight;
    } else {
        programs[node].nodeWeight = programs[node].weight + programs[node].children.reduce((acc, curr) => acc + findNodeWeight(curr), 0);
        return programs[node].nodeWeight;
    }
}

findNodeWeight(root);

//FIND AND LOG UNBALANCED NODE
function findUnbal(node) {
    if (programs[node].children.length == 0) {
        return false;
    }
    for (let c of programs[node].children) {
        let found = findUnbal(c);
        if (found) {
            return found;
        }
    }
    let tempWeight = programs[programs[node].children[0]].nodeWeight;
    let idx = programs[node].children.findIndex((element) => {
        return programs[element].nodeWeight != tempWeight;
    })
    if (idx > 0) {
        console.log(`unbal node = ${programs[node].weight}`)
        programs[node].children.forEach(e => {
            console.log(`node - ${programs[e].node} weight = ${programs[e].weight} nodeWeight - ${programs[e].nodeWeight}`);
        })
        return true;
    } else {
        return false;
    }
}

findUnbal(root);






