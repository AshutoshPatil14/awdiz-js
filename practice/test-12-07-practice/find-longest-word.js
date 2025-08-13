

let array1 = ['hi', 'hello', 'goodbye']
let array2 = ['short', 'longer', 'lengthiest']
let index = null
let length = 0


function longestWord(array){
    for(let i=0; i<array.length; i++){
        if(length<array[i].length){
            length = array[i].length 
            str=array[i]
        }
    }
    return str
}

let output = longestWord(array1)

console.log(output)