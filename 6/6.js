let bank = [5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6];
let perms = [];

while (perms.indexOf(bank.join()) == -1) {
    perms.push(bank.join());
    move(bank);
}

console.log("6A = " + perms.length);
console.log("6B = " + (perms.length - perms.indexOf(bank.join())));

function move(arr) {
    let max = arr.reduce((a, b) => Math.max(a, b))
    let i = arr.findIndex( e => e == max);

    arr[i] = 0;

    while (max > 0) {
        i++;
        if (i > arr.length - 1) {
            i = 0;
        }
        arr[i]++;
        max--;
    }
}