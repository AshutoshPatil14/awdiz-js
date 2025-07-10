// This is the exapmle of function
let prompt = require("prompt-sync")();

function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

let add = addition(num1, num2);
let sub = subtraction(num1, num2);

console.log("Addition: ", add, "\nSubtraction: ", sub);

let parameteredAdditon = addition(5, 10);
console.log(
  "This is parameterized addition where 5 & 10 are the parameters: ",
  parameteredAdditon
);

function greet(name) {
  console.log("Hello, " + name + "!");
}

let userName = prompt("Enter your name: ");

greet(userName);

function tableOfMultiplication(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}

let number = Number(prompt("Enter a number to print a table: "));
tableOfMultiplication(number);
