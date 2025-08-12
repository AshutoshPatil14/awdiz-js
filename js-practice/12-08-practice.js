// Finde the intersection of two arrays

// let array1 = [1, 2, 3, 4];
// let array2 = [3, 4, 5, 6];

// function findIntersection(array1, array2) {
//   let array3 = [];
//   for (let i = 0; i < array2.length; i++) {
//     if (array1.includes(array2[i])) {
//       array3.push(array2[i]);
//     }
//   }
//   return array3;
// }

// console.log(findIntersection(array1, array2));

// Check if a string has all unique characters

// let str = "abcdef";

// function checkDuplicates(str) {
//   let array = str.split("").sort();

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkDuplicates(str));

// Find the longest word in a sentence

// let str = "I love programming in JavaScript"

// function findLongest(str) {
//     let words = str.split(" ")
//     let longest = ""

//     for (const word of words) {
//         if(word.length > longest.length){
//             longest = word
//         }
//     }
//     return longest
// }

// console.log(findLongest(str))

// Capitalize the first letter of each word

// let str = "hello world";

// function cap(str) {
//   let words = str.split(" ");
//   let newword
//   let newArray = []
//     for (const word of words) {
//         newword = word.split("")
//         let newword2 = newword[0].toUpperCase()
//         newword.splice(0,1)
//         newword.unshift(newword2)
//         let newword3 = newword.join("")
//         newArray.push(newword3)

//     }
//     let string = newArray.join(" ")
//     return string
// }

// console.log(cap(str));

// Rotate an array by k steps to the right

// let array = [1, 2, 3, 4, 5];
// let k = 2;

// function rotateToRight(array, k) {
//   let pop;
//   for (let i = 1; i <= k; i++) {
//     pop = array.pop();
//     array.unshift(pop);
//   }
//   return array;
// }

// console.log(rotateToRight(array, k));

// Fibonacci sequence up to n terms

// let num = 7;

// function fibonacci(num ){
//     let num1=0
//     let num2=1
//     let res
//     let array=[0,1]
//     for (let i=2 ; i<num; i++){
//         res=num1+num2
//         num1=num2
//         num2=res
//         array.push(num2)
//     }
//     return array
// }

// console.log(fibonacci(num))

// Count the number of vowels in a string

// let str = "heLLo world";

// function countVowels(str) {
//     let count = 0
//   str = str.toLowerCase();
//     for(let i=0; i<str.length; i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels(str));

// Find the GCD

// let num1 = 12;
// let num2 = 18;

// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// console.log(gcd(num1, num2));

// Binary search

// let array = [1, 3, 5, 7, 9];
// let find = 5;

// function binarySearch(array, k) {
//   let left = 0;
//   let right = array.length - 1;
//   let middleIndex

//   while (left <= right) {

//       middleIndex = Math.floor((left + right) / 2);
//       if (array[middleIndex] > k) {
//         right = middleIndex - 1;
//       } else if (array[middleIndex] < k) {
//         left = middleIndex + 1;
//       } else if(array[middleIndex] == k){
//         console.log("Element found at", middleIndex, "index");
//         break
//       }
//     }
//     // console.log(left, right, middle);
//     return middleIndex
//   }

// console.log(binarySearch(array, find));

// Merge two sorted arrays into one single array

// let array1 = [1, 3, 5];
// let array2 = [2, 4, 6];

// function merge(array1, array2) {
//   let newArray = [...array1, ...array2];
//   return newArray.sort((a,b) => a-b);
// }

// console.log(merge(array1, array2));
