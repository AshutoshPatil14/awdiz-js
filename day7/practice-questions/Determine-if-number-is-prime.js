

let num=13
let isPrime=true

for (let i=2; i<num; i++){
    if(num%i==0){
        isPrime=false
    }
}

console.log(isPrime)

// Output: true