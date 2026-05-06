// Reverse a string without using built-in reverse().

// const str = "strength";

// const revStr = (str) => {
//   const arr = str.split("");

//   let i = arr.length - 1;
//   const revArr = [];
//   while (i >= 0) {
//     revArr.push(arr.pop());
//     i--;
//   }
//   const res = revArr.join("");
//   return res;
// };

// console.log(revStr(str));

// Check if a string is a palindrome.

// const str = "robot";

// const checkPalindrome = (str) => {
//   const revStr = str.split("").reverse().join("");
//   return revStr === str;
// };

// console.log(checkPalindrome(str));

// Find the two numbers in an array that sum to a target.

let arr = [1, 2, 3, 4, 5, 6, 7];
const target = 9;

function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) {
      return [complement, arr[i]];
    }

    map.set(arr[i], i);
  }

  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
