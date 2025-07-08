

let array = [1,4,6,9]
let isPositive = true;

for (let i=0; i<array.length; i++){
    if (array[i]<0){
        isPositive = false
    }
}

console.log(isPositive)

// Output: true