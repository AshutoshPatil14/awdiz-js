let array = [];

for (let i = 10; i <= 50; i++) {
  let isPrime = true;
  if (i <= 1) continue;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    array.push(i);
  }
}

console.log(array); 


// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
