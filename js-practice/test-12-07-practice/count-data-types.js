


let array1 = [1,'hi',true,{}]
let array2 = ['x', 'y', 5]

let obj = {}

function countDataTypes(array){
    for(let i=0; i<array.length; i++){
        let type=typeof(array[i])
        // console.log(type)
        if(!obj[type]){
            obj[type] = 1
            // console.log(obj)
        }else{
            obj[type]++
            // console.log(obj)
        }
        // console.log(obj)
    }
    return obj
}

let output = countDataTypes(array2)

console.log(output)