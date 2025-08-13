


let array1 = [1,2,3,4]
let k1 = 2

let array2 = [10,20,30]
let k2 = 1


function rotate(array,k){
    // let newArray = []
    for(let i=1; i<=k; i++){
        pop = array.pop(array.length-1)
        array.unshift(pop)
    }
    return array
}

console.log(rotate(array1,k1))
console.log(rotate(array2,k2))