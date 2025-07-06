let array = [1, 2, 3, 4, 5, 6];

let sum = array.reduce((a, b) => (b % 2 == 0 ? a + b : a), 0);

console.log(sum);
// Output: 12
