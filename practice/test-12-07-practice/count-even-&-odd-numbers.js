
let array1 = [2,3,4,5]
let array2 = [11,14,16,17,19]
let even=odd=0


function count(array){
    for(let i=0; i<array.length; i++){
        if(array[i]%2==0){
            even++
        }else{
            odd++
        }
    }
    return [even, odd]
}

let [e,o]= count(array2)

console.log(e,o)