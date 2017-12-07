let input = 361527;

let grid = [];
let gridSize = 15;

for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
        grid[i].push(0);
    }
}
let x = 7;
let y = 7;
grid[x][y] = 1;
let run = 2;
let stop = 0;

for (let i = 0; i < 5; i++) {
    for (let j = 1; j < run; j++) {
        let value = fillElement(grid, x, y + j);
        if(value>input){
            console.log(value)
            stop = 1;
            break;
        }else{
            grid[x][y+j]=value;
        }
    }
    y = y + run-1;
    for (let j = 1; j < run; j++) {
        let value = fillElement(grid, x+j, y);
        if(value>input){
            console.log(value)
            stop = 1;
            break;
        }else{
            grid[x+j][y]=value;
        }
    }
    x = x + run-1;
    run++;
    for (let j = 1; j < run; j++) {
        let value = fillElement(grid, x, y-j);
        if(value>input){
            console.log(value)
            stop = 1;
            break;
        }else{
            grid[x][y-j]=value;
        }
    }
    y = y - (run-1);
    for (let j = 1; j < run; j++) {
        let value = fillElement(grid, x-j, y);
        if(value>input){
            console.log(value)
            stop = 1;
            break;
        }else{
            grid[x-j][y]=value;
        }
    }
    x = x - (run-1);
    run++;
    if(stop){
        break;
    }

}

function fillElement(arr, x, y){
    return (arr[x + 1][y] + arr[x + 1][y + 1] + arr[x][y + 1] + arr[x - 1][y + 1] + arr[x - 1][y] + arr[x - 1][y - 1] + arr[x][y - 1] + arr[x + 1][y - 1]);
}