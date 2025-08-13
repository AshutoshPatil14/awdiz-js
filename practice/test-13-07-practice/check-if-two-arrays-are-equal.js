


let array1 = [1,2]
let array2 = [2,1]

function compare(array1,array2){
    let flag = false
    for(let i=0; i<array1.length; i++){
        for(let j=i; j<array2.length; j++){
            if(array1[i]==array2[j]){
                flag = true
            }else{
                flag = false
            }
        }
    }
    return flag
}

console.log(compare(array1,array2))