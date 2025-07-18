let prompt = require("prompt-sync")();

// Ternary Operator

// let age = prompt("Enter your age: ")

// let vote = age>=18 ? (age <= 75 ? "Yes, You can vote" : "No, You canoot vote"
let vote = age>=18 ? (age <= 75 ? "Yes, You can vote" : "Your age must be under 75 to eligible for vote") : "No, You canoot vote"
console.log(vote)

// Template Literals

// let name = prompt("Enter your name: ")
// let surname = prompt("Enter your surname: ")

console.log(`Hello ${name} ${surname}, Its good to see you!`)

// Array Destructuring

let array = [1,2,3,4,5]
let [fisrtnum, secondnum, thirdnum, fourthnum, fifthnum] = array

console.log(fisrtnum ,fourthnum, secondnum, fifthnum, thirdnum)

// Object Destructuring

let userDetails = {name:"Ted", surname:"Mosby", age:28, location:"NYC"}
let {name, surname, age, location} = userDetails

console.log(age, name, surname, location)

// Callback Function

function sayHello(name, callback) {
    console.log(`Hello Mr. ${name}, `)
    callback(age)
}

function askAge(age) {
    console.log(`Is your age ${age} is correct?`)
}

sayHello(name,askAge)

function canDrink(age, ifyes, ifno) {
    let drink = age>=21 ? ifyes() : ifno()
    return drink
}

function ifyes(){
    console.log(`You can have your drink.`)
}

function ifno() {
    console.log(`You are underaged so you are not allowed to drink.`)
}

canDrink(16, ifyes, ifno)

// 5 . Promise

let getUserData = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let success = false; // Change to false to test rejection

    if (success) {
      resolve({ name: "Ted", age: 28 });
    } else {
      reject("Failed to fetch user data.");
    }
  }, 2000);
});

getUserData
  .then((data) => {
    console.log("User data received:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// try catch finally
// async await
// new
// this
// contrcutor function
// class
// ls ss cookies
