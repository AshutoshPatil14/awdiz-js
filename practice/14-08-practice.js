// // Remove duplicates from an array

// let array = [1,2,2,3,4,4,5]

// // let noDup = [...new Set(array)]

// // console.log(noDup)

// function removeDuplicates(array) {
//     let noDuplicates = []

//     for(let i=0; i<array.length; i++){
//         if (!noDuplicates.includes(array[i])){
//             noDuplicates.push(array[i])
//         }
//     }
//     return noDuplicates
// }

// console.log(removeDuplicates(array))

// // reverse each word in a sentence

// let str = "Hello World";

// function reverse(str) {
//   let str1 = str.split(" "); //.reverse().join(" ")
//   let str2 = [];
//   for (const element of str1) {
//     str2.push(element.split("").reverse().join(""));
//   }

//   return str2.join(" ");
// }

// console.log(reverse(str));

// find the first non-repeating character in a string

// let str = "swiss"

// function noRepeats(str){
// for (const char of str) {
//     if(str.indexOf(char) === str.lastIndexOf(char)){
//         return char
//     }
// }
// return "No non-repeating character found"
// }

// console.log(noRepeats(str))

// Implement a function to check if a number is prime

// let num = 7;

// function checkPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true
// }
// console.log(checkPrime(num))

// // sum of all numbers in a nested array

// let array = [1,[2,[3,4],5],6]

// function findSum(array){
//     let array1 = array.flat(Infinity)

//     const sum = array1.reduce((acc, curr) => acc+ curr, 0)

//     return sum
// }

// console.log(findSum(array))

// // Rotate an array to the left by k positions

// let array = [1, 2, 3, 4, 5];
// let k = 2;

// function rotate(array, k) {
//   let ele = null;
//   for (let i = 1; i <= k; i++) {
//     ele = array.shift();
//     array.push(ele);
//   }

//   return array;
// }

// console.log(rotate(array, k));

// // Check if a string is a pangram

// let str = "The quick brown fox jumps over the lazy dog";

// function findPangram(str) {
//   str = str.toLowerCase();
//   for (const char of "abcdefghijklmnopqrstuvwxyz") {
//     if (!str.includes(char)) return false;
//   }
//   return true;
// }

// console.log(findPangram(str));

// // Merge overlapping intervals

let array = [[1,3],[2,6],[8,10],[15,18]]

function mergeOverlapping(array){

}







// // Find the kth largest element in an array

// let array = [3, 2, 1, 5, 6, 4];
// let k = 2;

// function kthLargest(array, k) {
//   let array1 = array.sort((a, b) => b - a);
//   return array1[k - 1];
// }

// console.log(kthLargest(array, k));

// // Implement factorial recursively

// let num = 5;

// function fact(num) {
//     if(num <=1) return 1
//     return num * fact(num-1)
// }
// console.log(fact(num))
