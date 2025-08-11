// Reverse a String

// let input = "hello";

// const reverse = (string) => {
//   let newstr = string.split("").reverse().join("");
//   return newstr;
// };

// console.log(reverse(input));

// check if a string is palindrome

// let input = "hello";

// const palindrome = (string) => {
//   let newstr = string.split("").reverse().join("");
//   return newstr == string ? true : false;
// };

// console.log(palindrome(input))

// find maximum and minimum in an array

// let array = [5, 2, 9, 1, 7];

// function minmax(array) {
//   let max = array[0];
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     } else if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return console.log(min, max)
// }
// console.log(minmax(array));

// Sum of all elements in an array

// let array = [1, 2, 3, 4, 5];

// function sum(array) {
//   let sum = array.reduce(
//     (accumulaor, currentValue) => accumulaor + currentValue,
//     0
//   );
//   return sum;
// }

// console.log(sum(array));

// Count occurences of an element in an array

// let array = [1,2,2,3,2]
// let target = 2

// function findOccurences(array, target) {
//     let count = 0
//     for(let i=0; i<array.length; i++){
//         if(array[i]===target){
//             count++
//         }
//     }
//     return count
// }

// console.log(findOccurences(array, target))

// print all prime numbers in the range

// function prime(start, end){
//     for (let i=start; i<=end; i++){
//         if(i<2) continue
//         let isPrime = true

//         for (let j=2; j<=Math.sqrt(i); j++){
//             if(i % j ===0){
//                 isPrime=false
//                 break
//             }
//         }

//         if (isPrime){
//             console.log(i)
//         }
//     }
// }

// prime(10,20)

// Factorial of a number

// let num = 7;

// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i
//   }
// return fact
// }

// console.log(factorial(num))

// Sort an array in ascending order

// let array = [5, 2, 9, 1, 7];

// function sort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i; j++) {
//       if (array[j] > array[j + 1]) {
//         temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// console.log(sort(array));

// Find teh second largest number in an arry

// let array = [5, 7, 1, 9, 3];

// function secondLargest(array) {
//   let max = array[0];
//   let max2 = array[0];
//   for (const i of array) {
//     if (i > max) {
//       max2 = max;
//       max = i;
//     } else if (i > max2 && i !== max) {
//       max2 = i;
//     }
//   }
//   return max2;
// }

// console.log(secondLargest(array));

// remove duplicates from an array

// let array=[1,2,2,3,4,4,5]

// function noDuplicates(array) {
//     let newArray = []
//     for( let i=0;i<array.length; i++){
//         if(!newArray.includes(array[i])){
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }

// console.log(noDuplicates(array))

// reverse words in a sentence

// let str = "I love JavaScript";

// const reverse = (str) => str.split(" ").reverse().join(" "));

// console.log(reverse(str));

// Find the missing number from 1 to n

// let array = [1, 2, 4, 5];

// function findMissing(array) {
//   let newarray = [];
//   let counter = 1;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== counter) {
//       newarray.push(counter);
//       counter++;
//     }
//     counter++;
//   }
//   return newarray;
// }

// console.log(findMissing(array));

// check if two strings are anagrams

// let str1 = "listen";
// let str2 = "silewt";

// function findAnagrams(str1, str2) {
//   let array1 = [];
//   let array2 = [];

//   if (str1.length !== str2.length) return false;

//   function stringSplit(str1) {
//     let newstr = str1.split("");
//     return newstr;
//   }
//   array1.push(stringSplit(str1));
//   array2.push(stringSplit(str2));

//   array1 = array1.flat(1);
//   array2 = array2.flat(1);

//   for (let i = 0; i < array1.length; i++) {
//     if (!array2.includes(array1[i])) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(findAnagrams(str1, str2));

// Find all even numbers in a range

// let start = 10
// let end = 20

// function findEven(start, end){
//     let newArray = []
//     for (let i=start; i<=end; i++){
//         if(i%2==0){
//             newArray.push(i)
//         }
//     }
//     return newArray
// }

// console.log(findEven(start,end))

// Move all zeros to the end of the array

// let array = [0, 1, 0, 3, 12];

// function moveZeros(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == 0) {
//       array.splice(i, 1);
//       array.push(0);
//     }
//   }
//   return array;
// }

// console.log(moveZeros(array));
