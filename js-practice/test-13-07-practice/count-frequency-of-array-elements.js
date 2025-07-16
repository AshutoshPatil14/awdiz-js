let array1 = [1, 2, 2, 3];
let array2 = [4, 4, 4];

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

console.log(count(array1));
console.log(count(array2));
