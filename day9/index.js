let prompt = require("prompt-sync")()


function sayHello(){
    console.log("Helloo!!")
}

sayHello()



// Function Expression

let sayHey = function(){
    console.log("Heyy there!!!")
}

sayHey()


// Default Parameters

function add (a=1,b=2){
    console.log(a+b)
}
// add(4,7)
add()


function greet(data="Buddy!"){
    console.log("Heyy" , data)
}
let name = prompt("Enter your name: ")
greet(name)
// greet()


// Arrow function

let sub = (m,n) => {
    console.log(m-n)
}
sub(7,3)

let multi = (x,y) => console.log(x*y)

multi(5,2)



// Object

let obj = {name:{firstName:"Ashutosh", lastName:"Patil"}, age:23, languages:["C", "C++", "Python", "Java"], isWorking:false}

console.log(obj.name.firstName)
console.log(obj)

obj.name.firstName="Ashu"
age=43
obj.languages.push("JavaScript")
obj.willingToWork=true

console.log(obj)


for(let key in obj){
    console.log(key, obj[key])
}