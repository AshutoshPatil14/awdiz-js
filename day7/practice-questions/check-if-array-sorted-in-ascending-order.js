

let array = [2,5,8,9]
let isSorted = true

for (let i=0; i<array.length-1; i++){
    if(array[i]>array[i+1]){
        isSorted = false
    }
}

console.log(isSorted)

// Output: true