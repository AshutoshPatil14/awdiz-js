let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 7, 4, 1;
// 8, 5, 2;
// 9, 6, 3;

function rotate90(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, "before");
      let temp = arr[i][j];
      arr[i][j] = arr[j][i]
      arr[j][i] = temp;
      console.log(arr, "after");
    }
  }
  return arr;
}
console.log(rotate90(arr));
