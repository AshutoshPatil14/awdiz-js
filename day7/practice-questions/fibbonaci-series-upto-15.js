let array = [];
let a, b, c;
a = 0;
b = 1;
c = 0;

for (i = 1; i <= 15; i++) {
  array.push(a);
  c = a + b;
  a = b;
  b = c;
}
console.log(array);
