let array1 = [1, 2, 2, 3];
let array2 = [4, 4, 4, 5];

function noRepeat(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let output = noRepeat(array2);

console.log(output);
