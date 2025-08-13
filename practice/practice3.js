// Transpose of a Matrix

// let array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// function transpose(array) {
//   let rows = array.length;
//   let cols = array[0].length;
//   let result = [];

//   for (let i = 0; i < cols; i++) {
//     let newRow = [];
//     for (let j = 0; j < rows; j++) {
//       newRow.push(array[j][i]);
//     }
//     result.push(newRow);
//   }
//   return result;
// }

// console.log(transpose(array));

// Diagonal Sum of Square Matrix

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function diagonalSum(array) {
//   let top, bottom, left, right;
//   top = 0;
//   left = 0;
//   right = array[0].length - 1;
//   bottom = array.length - 1;
//   let sum = 0;

//     for (let i = top; i <= bottom; i++) {
//       console.log(array[i][i]);
//       sum += array[i][i];
//     }

// //   console.log(sum);
//   for (let j = right; j >= left; j--) {
//     // console.log(j);
//     for (let k= top; k<=bottom; k++){
//         console.log(array[j][k]);
//         sum += array[j][k];
//     }
//     console.log(sum);
//   return sum
// }

// }

// console.log(diagonalSum(array));

// Spiral Print of Matrix

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function spiral(array) {
//   let newArray = [];
//   let top, bottom, left, right;
//   left = 0;
//   top = 0;
//   right = array[0].length - 1;
//   bottom = array.length - 1;

//   while (left <= right && top <= bottom) {
//     for (let i = left; i <= right; i++) {
//       //   console.log(array[top][i]);
//       newArray.push(array[top][i]);
//     }
//     top++;

//     for (let j = top; j <= bottom; j++) {
//       //   console.log(array[j][right]);
//       newArray.push(array[j][right]);
//     }
//     right--;

//     for (let k = right; k >= left; k--) {
//       //   console.log(array[bottom][k]);
//       newArray.push(array[bottom][k]);
//     }
//     bottom--;

//     for (let l = bottom; l >= top; l--) {
//       //   console.log(array[l][left]);
//       newArray.push(array[l][left]);
//     }
//     left++;
//   }

//   newArray.join(" ");
//   return newArray;
// }

// console.log(spiral(array));

// Search in 2D Matrix

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let find = 5;

// function finder(array, k) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[0].length; j++) {

//       if (array[i][j] === k) {
//         return true;
//       }
//     }
//   }
//   return false
// }

// console.log(finder(array, find));

// Count Zeros and Ones in a Matrix

// let array = [
//   [1, 0, 1],
//   [1, 1, 0],
//   [0, 0, 1],
// ];

// function count(array){
//     let obj = { zero: 0, one: 0 }
//     for(let i=0; i<array.length; i++){
//         for(let j=0; j<array[0].length; j++){
//             if (array[i][j]==1) {
//                 obj.one++
//             }else{
//                 obj.zero++
//             }
//         }
//     }
//     return obj
// }

// console.log(count(array))

// Count Elements Greater than a Threshold

// let array = [
//   [2, 5, 7],
//   [1, 8, 3],
// ];
// k=5
// function thresholdCounter(array, k){
//     let count = 0
//     for(let i=0; i<array.length; i++){
//         for(let j=0; j<array[0].length; j++){
//             if (array[i][j]>k) {
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(thresholdCounter(array, k))

// Find Row with Maximum Sum

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [0, 1, 1],
// ];

// function maxRowFinder(array) {
//   let sum = 0;
//   let maxSum = 0;
//   let maxRow = [];

//   for (let ele of array) {
//     sum = ele.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     if (sum > maxSum) {
//       maxSum = sum;
//       maxRow = ele;
//     }
//   }

//   return maxRow;
// }

// console.log(maxRowFinder(array));

// Boundary Elements of a Matrix

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function boundaryElements(array) {
//   let newArray = [];
//   let top, bottom, left, right;
//   left = 0;
//   top = 0;
//   right = array[0].length - 1;
//   bottom = array.length - 1;

//     for (let i = left; i <= right; i++) {
//       //   console.log(array[top][i]);
//       newArray.push(array[top][i]);
//     }
//     top++;

//     for (let j = top; j <= bottom; j++) {
//       //   console.log(array[j][right]);
//       newArray.push(array[j][right]);
//     }
//     right--;

//     for (let k = right; k >= left; k--) {
//       //   console.log(array[bottom][k]);
//       newArray.push(array[bottom][k]);
//     }
//     bottom--;

//     for (let l = bottom; l >= top; l--) {
//       //   console.log(array[l][left]);
//       newArray.push(array[l][left]);
//     }
//     left++;

//     newArray.join(" ");
//     return newArray;
// }

// console.log(boundaryElements(array));
