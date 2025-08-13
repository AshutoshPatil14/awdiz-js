let year1 = 2024;
let year2 = 2023;
let leap = false;

function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    leap = true;
  }
  return leap
}

let output = leapYear(year1)
console.log(output)