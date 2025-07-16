

let num1 = 5
let num2 = 3


function factorial(num) {
    let fact = 1
    for(let i=1; i<=num; i++){
        fact = fact * i
    }
    return fact
}

console.log(factorial(num1))