let string = "apple";
let i;
let counter = [];
let char;

for (i = 0; i < string.length; i++) {
  char = string[i];
  if (counter[char]) {
    counter[char]++;
  } else {
    counter[char] = 1;
  }
}
console.log(counter);