let array1 = ["hi", "yes", "no", "maybe"];
let array2 = ["a", "ab", "abc"];

function group(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let length = array[i].length
    if (!obj[length]) {
        obj[length] = []
        // console.log(obj[array[i]])
    }
    obj[length].push(array[i])
  }
  return obj;
}

let output = group(array1);

console.log(output);
