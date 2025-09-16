// let arr1 = [4, 9, 5];
// let arr2 = [9, 4, 9, 8, 4];

// function findIntersection(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
// }

// console.log(findIntersection(arr1, arr2));

// let arr = [9, [4, [9], 8], 4];

// console.log(arr.flat(Infinity));

// // **
// // *
// // **
// // *

// let i = 0;
// while (i < 4) {
//   if (i % 2 == 0) {
//     console.log("**");
//   } else {
//     console.log("*");
//   }
//   i++;
// }

// let str = "hello world"
// const reverse = (str) => {
//   let revStr = str.split("").reverse().join("");
//   return revStr;
// };

// console.log(reverse(str));




// let str = "abcabcde";

// function firstUniqueChar(str) {
//   for (let char of str)
//     if (str.indexOf(char) === str.lastIndexOf(char)) return char;
//   return null;
// }

// console.log(firstUniqueChar(str));


// Anagram

// let res = str.toLowerCase().split().sort().join()


function charFrequency(str) {
  let freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return freq;
}
console.log(charFrequency("banana")); // { b:1, a:3, n:2 }