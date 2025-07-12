let array1 = [95, 82, 67, 50];
let array2 = [91, 59, 76, 88];

let obj = { A: 0, B: 0, C: 0, D: 0, F: 0 };

function grade(array, Object) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 90) {
      Object.A++;
    } else if (array[i] > 80 && array[i] <= 90) {
      Object.B++;
    } else if (array[i] > 70 && array[i] <= 80) {
      Object.C++;
    } else if (array[i] > 60 && array[i] <= 70) {
      Object.D++;
    } else if (array[i] < 60) {
      Object.F++;
    }
  }
  return Object
}

let output = grade(array2,obj)

console.log(output);