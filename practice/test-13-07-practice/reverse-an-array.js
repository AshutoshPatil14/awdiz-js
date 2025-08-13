let array1 = [1, 2, 3];
let array2 = [10, 20, 30];
let newArray = [];

function reverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  // let newArray = []
  // let pop = array.pop()
  // let push = newArray.unshift(pop)

  return newArray;
}

console.log(reverse(array1));
