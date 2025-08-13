

let array1 = [1,2,-3,4]
let array2 = [5,7,8]
let index = -1

function negativeFound(array) {
    for(let i=0; i<array.length; i++){
        if(array[i]<0){
            index=i
        }
    }
    return index
}

console.log(negativeFound(array1)) 
