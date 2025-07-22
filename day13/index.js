


// // Save data
// localStorage.setItem("username", "Anshul");

localStorage.setItem("username", "Ashutosh")


// // Get data
// let user = localStorage.getItem("username");
// console.log("Hello,", user);

let user = localStorage.getItem("username")
console.log(`Hello ${user}`)




// // Remove data
// localStorage.removeItem("username");

// localStorage.removeItem("username")





// // Clear all data
// localStorage.clear();
localStorage.clear()



// // Save session data
// sessionStorage.setItem("theme", "dark");
sessionStorage.setItem("theme", "Auto")




// // Get session data
// let theme = sessionStorage.getItem("theme");
// console.log("Current theme:", theme);

let theme = sessionStorage.getItem("theme")
console.log(`Theme is set to ${theme}`)



// // Clear session data
// sessionStorage.clear();

sessionStorage.clear()


// // Right-angled triangle pattern
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }



// star pattern 
// *
// * *
// * * *
// * * * *
// * * * * *

let store = null

for(let i=1; i<=5; i++){
    store = ""
    for(let j=i; j<=i; j++){
        store += "* "
    }
    console.log(store)
}