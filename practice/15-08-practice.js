// // Reverse a number
// let num = 1234
// function reverse(num){
//     let str = num.toString()
//     let str1 = str.split("").reverse().join("")
//     return parseInt(str1)
// }
// console.log(reverse(num))

// // check if a String contains only unique characters

// let string = "abcd";

// function checkUnique(str) {
//     let array = []
//     for(let i=0;i<str.length; i++){
//         if(!array.includes(str[i])){
//             array.push(str[i])
//         }else return false
//     }
//     return true
// }
// console.log(checkUnique(string))

// // find the intersection of two arrays

// let array1 = [1, 2, 3];
// let array2 = [2, 3, 4];

// function findIntersection(array1,array2){
//     let array = []

//     for(let i=0;i<array1.length; i++){
//         for(let j=0; j<array2.length; j++){
//             if(array1[i]===array2[j]){
//                 array.push(array1[i])
//             }
//         }
//     }
//     return array
// }
// console.log(findIntersection(array1,array2))

// // Capitalixe the first letter of each word in a sentence

// let str = "Hello World";

// function cap(str) {
//   let newstr = [];
//   let newstr1;
//   let string;
//   let str1 = str.split(" ");
//   for (const word of str1) {
//     let newword = word.split("");
//     newword[0].toUpperCase();
//     newstr1 = newword.join("");
//     newstr.push(newstr1);
//     string = newstr.join(" ");
//   }
//   return string;
// }

// console.log(cap(str));

// // Find the largest sum of any two elements in an array

// let array = [10, 14, 2, 23, 19];

// function largestSum(array) {
//   let max = (num1 = num2 = 0);
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         continue;
//       } else if (array[i] + array[j] > max) {
//         max = array[i] + array[j];
//         // num1 = array[i];
//         // num2 = array[j];
//       }
//     }
//   }
//   //   return console.log(`${max} (${num1} + ${num2})`);
//   return max;
// }

// console.log(largestSum(array));

// // Remove all falsy values from an array

// let array = [0,1,false , 2,"",3,null, undefined]

// array = array.filter(Boolean)
// console.log(array)

// // Check if a number is an armstrong number

// let num = 153;
// function checkArmstrong(num) {
//   let str = num.toString();
//   let power = str.length;
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]) ** power;
//   }
// //   console.log(sum);

//   return sum == num;
//   // console.log(power)
// }
// console.log(checkArmstrong(num));

// // Count the number of vowels in a string

// let str = "Hello World"

// function countVowels(str) {
//     let count = 0
//     for(let i=0; i<str.length; i++){
//         if( str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") count++
//     }
//     return count
// }

// console.log(countVowels(str))

// Sort an array of objects by a given key (age)

// let array = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 20 },
//   { name: "Doe", age: 22 },
// ];

// function sortArray(array){
//     array.sort((a,b) => a.age - b.age)
//     return array
// }
// console.log(sortArray(array))

// // Generate all the substrings of a string

// let str = "abc";

// function findSubstrings(str) {
//   let array = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       array.push(str.slice(i, j));
//     }
//   }
//   return array;
// }

// console.log(findSubstrings(str));
