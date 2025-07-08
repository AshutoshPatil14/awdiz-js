let str = "coding";
let repeat = false;

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j < str.length; j++) {
    if (str[i] === str[j]) {
      repeat = true;
      break;
    }
  }
}
console.log(repeat);

// Output: false