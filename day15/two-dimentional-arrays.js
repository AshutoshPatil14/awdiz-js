let array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

// spiral

let spiral = [];
let top, bottom, left, right;
left = 0;
top = 0;
right = array[0].length - 1;
bottom = array.length - 1;

while (left <= right && top <= bottom) {
  for (let i = left; i <= right; i++) {
    //   console.log(array[top][i]);
    spiral.push(array[top][i]);
  }
  top++;

  for (let j = top; j <= bottom; j++) {
    //   console.log(array[j][right]);
    spiral.push(array[j][right]);
  }
  right--;

  for (let k = right; k >= left; k--) {
    //   console.log(array[bottom][k]);
    spiral.push(array[bottom][k]);
  }
  bottom--;

  for (let l = bottom; l >= top; l--) {
    //   console.log(array[l][left]);
    spiral.push(array[l][left]);
  }
  left++;
}

spiral.join(" ");
console.log(spiral.reverse());

//   print Z-pattern

// let array = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];

let z = [];
// let top, bottom, left, right;
// left = 0;
// top = 0;
// right = array[0].length - 1;
// bottom = array.length - 1;

for (let i = left; i <= right; i++) {
  // console.log(array[top][i])
  z.push(array[top][i]);
}
top++;
for (let j = right - 1; j >= left; j--) {
  // console.log(array[top][j])
  z.push(array[top][j]);
  top++;
}
left++;
for (let k = left; k <= right; k++) {
  // console.log(array[bottom][k])
  z.push(array[bottom][k]);
}

// z.join(" ")
console.log(z.reverse().join(" "));

// N pattern

// let array = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];

let n = [];
// let top, bottom, left, right;
// left = 0;
// top = 0;
// right = array[0].length - 1;
// bottom = array.length - 1;

for (let i = bottom; i >= top; i--) {
  // console.log(array[i][top])
  n.push(array[i][top]);
}
left++;
for (let j = top + 1; j <= bottom; j++) {
  // console.log(array[j][left])
  n.push(array[j][left]);
  left++;
}
bottom--;
for (let k = bottom; k >= top; k--) {
  // console.log(array[k][right])
  n.push(array[k][right]);
}

console.log(n.join(" "));
