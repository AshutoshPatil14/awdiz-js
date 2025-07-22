localStorage.setItem("username", "Ashutosh");

let user = localStorage.getItem("username");
console.log(`Hello ${user}`);

localStorage.removeItem("username");

localStorage.clear();

sessionStorage.setItem("theme", "Auto");

let theme = sessionStorage.getItem("theme");
console.log(`Theme is set to ${theme}`);

sessionStorage.clear();

// star pattern
// *
// * *
// * * *
// * * * *
// * * * * *

let store = null;

for (let i = 1; i <= 5; i++) {
  store = "";
  for (let j = i; j <= i; j++) {
    store += "* ";
  }
  console.log(store);
}
