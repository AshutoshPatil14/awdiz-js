let i;
let square;

for (i = 1; i <= 10; i++) {
  square = i * i;

  if (square < 20) {
    console.log("The square of " + i + " is less than 20 (Small)");
  } else if (square >= 20 && square < 50) {
    console.log("The square of " + i + " is between 20 and 50 (Medium)");
  } else if (square >= 50) {
    console.log("The square of " + i + " is greater than 50 (Large)");
  }
}
