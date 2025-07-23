// closure

function mainFunction() {
  console.log(`This is the main function`);
  function secondaryFunction() {
    console.log(`This is the inner/secondary function`);
  }
  return secondaryFunction;
}

let innerFunction = mainFunction();

innerFunction();

// // inheritance
class parent {
  constructor(name) {
    this.name = name;
  }
}

class child extends parent {
  printDetails() {
    // this.name = "Ashutosh";
    this.age = 20;
    console.log(`Hi, ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

let head = new child("Ted");
head.printDetails();

// 2D array

let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

  let left, right, top, bottom;

  left = 0;
  right = array[0].length - 1;
  top = 0;
  bottom = array.length - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      console.log(array[top][i]);
    }
    top++;

    for (let j = top; j <= bottom; j++) {
      console.log(array[j][right]);
    }
    right--;

    for (let k = right; k >= left; k--) {
      console.log(array[bottom][k]);
    }
    bottom--;

    for (let l = bottom; l >= top; l--) {
      console.log(array[l][left]);
    }
    left++;
  }

