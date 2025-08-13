// Reverse words in a sequence without reversing letters

// let str = "I love JavaScript"

// function reverse(str){
//     let array = str.split(" ").reverse().join(" ")
//     return array
// }

// console.log(reverse(str))

// Find missing number in an array

// let array = [1, 2, 4, 5, 6];

// function findMissing(array) {
//   let res;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i + 1] - array[i] > 1) {
//       res = array[i] + 1;
//       break
//     }
//   }
//   return res
// }

// console.log(findMissing(array));

// flatten a nested array

// let array = [1,[2,[3,4],5],6]

// let array1 = array.flat(Infinity)

// console.log(array1)

// check for palindrome string

// let str = "Race car";

// function checkPalindrome(str) {
//   let str1 = str.toLowerCase().replace(/\s+/g, "");
//   let revstr1 = str1.split("").reverse().join("");
//   return str1 === revstr1;
// }

// console.log(checkPalindrome(str));

// find the second largest number in an array

// let array = [10, 5, 20, 8, 15];

// function largest(array) {
//   let max = 0,
//     max2 = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max2 = max;
//       max = array[i];
//     } else if (array[i] > max2 && max !== max2) {
//       max2 = array[i];
//     }
//   }

//   return max2;
// }

// console.log(largest(array));
