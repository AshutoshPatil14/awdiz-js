let array1 = [1, 2, 2, 3];
let array2 = [5, 5, 5, 1];

function noDuplicates(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    } else {
      continue;
    }
  }
  return newArray;
}

console.log(noDuplicates(array1));
console.log(noDuplicates(array2));
