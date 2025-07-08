

let array = [1, 2, 3, 4];
let reversed = [];
let i = array.length - 1;

while (i >= 0) {
    reversed.push(array[i]);
    i--;
}

console.log(reversed);

// Output: [4, 3, 2, 1]