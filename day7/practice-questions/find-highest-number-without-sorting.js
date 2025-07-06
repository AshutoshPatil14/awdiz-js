let array = [10, 5, 20, 8, 15];
let heightestNumber = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > heightestNumber) {
    heightestNumber = array[i];
  }
}
console.log(heightestNumber);


// output: 20