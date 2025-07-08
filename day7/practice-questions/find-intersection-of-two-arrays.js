

let array1 = [1,2,3]
let array2 = [2,3,4]

let intersection = []

for (let i=0; i<array1.length; i++){
    for( let j=0; j<array2.length; j++){
        if(array1[i]===array2[j]){
            intersection.push(array1[i])
            // intersection.push(array2[j])
        }
    }
}

console.log(intersection)

// Output: [2, 3]