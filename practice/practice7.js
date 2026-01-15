// Find the maximum element in an array.

// Example:
// [3, 5, 1, 8, 2] → 8

// const array = [3, 5, 1, 8, 2];
// let position = null;
// let max = null;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     position = i;
//     max = array[i];
//   }
// }
// console.log(position);
// console.log(max);

// Problem 2: Second Largest Element

// Input:
// [3, 5, 1, 8, 2]

// Output:
// 5

// const array = [3, 5, 1, 8, 2];

// const findSecondLargest = (arr) => {
//   let largest = 0;
//   let secondLargest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (secondLargest < arr[i] && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// };

// console.log(findSecondLargest(array));


// Problem 3: Reverse an Array (In-Place)

// Input:
// [1, 2, 3, 4, 5]

// Output:
// [5, 4, 3, 2, 1]


const array = [1, 2, 3, 4, 5];

// const reverseArray = (arr) => {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
//   return arr;
// };

// console.log(reverseArray(array));