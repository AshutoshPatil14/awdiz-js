// Reverse a string without using built-in reverse

// let str = "hello";

// let reverseString = (str) => {

//     let newstr = str.split("").reverse().join("")
//     return newstr
// };

// console.log(reverseString(str));

// find the second largest element in an array

// let array = [10, 20, 4, 45, 99];

// const findSecondLargest = (array) => {
//   let max1 = -Infinity;
//   let max2 = -Infinity;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max1) {
//       max2 = max1;
//       max1 = array[i];
//     } else if (array[i] > max2 && array[i] !== max1) {
//       max2 = array[i];
//     }
//   }
//   return [max1, max2];
// };

// console.log(findSecondLargest(array));

// Check if a string is a palindrome

// let str = "madam"

// function findPalindrome(str) {
//     let revstr = str.split("").reverse().join("")
//     return str==revstr
// }
// console.log(findPalindrome(str))

// Find the missing number in an array (1 to n)

// let array = [1, 2, 4, 5, 6];

// function findMissingNumber(array) {
//   let count = 1;
//   for (let i = 0; i < array.length; i++) {
//     if (count !== array[i]) {
//       return count;
//     }
//     count++;
//   }
//   return "No missing element found";
// }

// console.log(findMissingNumber(array));

// Find the frequency of characters in a stirng

// let str = "aabbcc"

// function findFrequenctOfCharacters(str) {
//     let obj={}
//     for(let i=0; i<str.length; i++){
//         if(obj[[str[i]]]){
//             obj[str[i]]++
//         }else{
//             obj[[str[i]]] = 1
//         }

//     }
//     return obj
// }
// console.log(findFrequenctOfCharacters(str))

// Flatten a nested array

// let array = [1, [2, [3, 4]], 5];

// console.log(array.flat(Infinity))

// check if two strings are anagrams

// let str1 = "listen";
// let str2 = "silent";

// function checkAnagrams(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < str1.length; i++) {
//       if (!str2.includes(str1[i])) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(checkAnagrams(str1, str2));

// Implement simple stack

// let array = []

// array.push(1)
// array.push(2)
// let pop = array.pop()
// let lastEle = array.length-1

// find the longest word in a sentence

// let string = "Web development is awesome"

// function findLongestWord(string){
//     let length = 0
//     let word = ""
//     let array = string.split(" ")
//     for(let i=0; i<array.length; i++){
//         if(array[i].length>length){
//             length = array[i].length
//             word = array[i]
//         }
//     }
//     return word
// }
// console.log(findLongestWord(string))

// Move all zeros to the end of an array

// let array = [0, 1, 0, 3, 12];

// const moveZerosToTheEnd = (array) => {
//   let newArray = [];
//   let count = 0;
//   let remove;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == 0) {
//       count++;
//     } else if (array[i] !== 0) {
//       newArray.push(array[i]);
//     }
//   }
//   for (let j = 0; j < count; j++) {
//     newArray.push(0);
//   }
//   return newArray;
// };
// console.log(moveZerosToTheEnd(array));
