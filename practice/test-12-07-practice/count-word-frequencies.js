let array1 = ["apple", "banana", "apple"];
let array2 = ["x", "x", "y"];

function count(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
}

let output = count(array1);
console.log(output);
