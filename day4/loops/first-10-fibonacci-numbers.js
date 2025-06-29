let a = 0;
let b = 1;
let c;
let i;

for (i = 1; i <= 10; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}
